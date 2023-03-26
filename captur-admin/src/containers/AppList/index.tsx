import { Button, Spin, Row, Col, message } from 'antd'
import { MenuOutlined, PlusOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import ProCard from '@ant-design/pro-card'
import { useRequest } from 'ahooks'
import { getAppList, createApp } from '@/services/apis'
import { ModalForm, ProFormText } from '@ant-design/pro-form'
import styles from './index.module.less'

const AppList = () => {
  const { loading, data, run } = useRequest(getAppList)
  const history = useHistory()

  return (
    <div className={styles.layout}>
      <Spin spinning={loading}>
        <div className={styles.content}>
          <div className={styles.header}>
            <span>
              <MenuOutlined />
              My applications ({data?.data?.count || 0})
            </span>
            <span>
              <ModalForm
                modalProps={{
                  width: 400,
                }}
                trigger={
                  <Button type="primary">
                    <PlusOutlined />
                    Add New Application
                  </Button>
                }
                onFinish={async (values: any) => {
                  await createApp(values)
                  message.success('submit success')
                  run()

                  return Promise.resolve(true)
                }}
                initialValues={{
                  useMode: 'chapter',
                }}
              >
                <ProFormText name="appId" width="md" label="appId" placeholder="appId" />
                <ProFormText name="name" width="md" label="name" placeholder="name" />
              </ModalForm>
            </span>
          </div>
          <Row gutter={24} className={styles.list}>
            {data?.data.list.map((item) => (
              <Col span={8} className={styles.cardWrap}>
                <ProCard
                  className={styles.card}
                  title={item.name}
                  onClick={() => {
                    history.push(`/admin/projects/${item.appId}`)
                  }}
                >
                  <div className={styles.info}>appId: {item.appId}</div>
                </ProCard>
              </Col>
            ))}
          </Row>
        </div>
      </Spin>
    </div>
  )
}

export default AppList
