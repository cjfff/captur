import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getRecords } from '@/services/apis'

import styles from './index.module.less'

import type { ProColumns } from '@ant-design/pro-table'
import ProTable from '@ant-design/pro-table'
import { STATUS_TYPES_ENUM } from './const'

export type TableListItem = {
  key: number
  name: string
  containers: number
  creator: string
  status: string
  createdAt: number
  memo: string
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '用户反馈邮箱',
    width: 160,
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: '反馈内容',
    width: 80,
    hideInSearch: true,
    dataIndex: 'description',
  },
  {
    title: 'sellerId',
    width: 160,
    dataIndex: 'seller_id',
    hideInSearch: true,
    copyable: true,
  },
  {
    title: '国家/地区',
    width: 140,
    hideInSearch: true,
    dataIndex: 'country_code',
  },
  {
    title: '当前处理状态',
    width: 80,
    hideInSearch: true,
    dataIndex: 'process_status',
    renderText: (text: keyof typeof STATUS_TYPES_ENUM) => {
      return STATUS_TYPES_ENUM[text]
    },
  },
  {
    title: '创建时间',
    width: 140,
    dataIndex: 'create_time',
    hideInSearch: true,
    valueType: 'dateTime',
  },

  {
    title: '更新时间',
    width: 140,
    dataIndex: 'update_time',
    hideInSearch: true,
    valueType: 'dateTime',
  },

  // {
  //   title: '状态',
  //   width: 80,
  //   dataIndex: 'status',
  //   initialValue: 'all',
  //   valueEnum: {
  //     all: { text: '全部', status: 'Default' },
  //     close: { text: '关闭', status: 'Default' },
  //     running: { text: '运行中', status: 'Processing' },
  //     online: { text: '已上线', status: 'Success' },
  //     error: { text: '异常', status: 'Error' },
  //   },
  // },
  {
    title: '操作',
    renderText: (item) => {
      const { sentry_message_id, _id } = item
      return (
        <>
          <a href={`${location.pathname}/${_id}`} target="_blank" rel="noopener noreferrer" key="view">
            详情
          </a>
          {sentry_message_id && (
            <a
              href={`https://sentry-new.myshopline.com/organizations/logistics-nk/issues/?query=${sentry_message_id}`}
              target="_blank"
              rel="noopener noreferrer"
              key="view"
            >
              sentry
            </a>
          )}
        </>
      )
    },
  },
]

export default () => {
  const { appId } = useParams<{ appId: string }>()
  const { run, data, loading } = useRequest(
    (query?: any) => {
      return getRecords({
        appId,
        ...query,
      })
    },
    {
      manual: true,
    }
  )

  useEffect(() => {
    run()
  }, [run])

  return (
    <div className={styles.layout}>
      <ProTable<TableListItem>
        columns={columns}
        loading={loading}
        request={async (params) => {
          await run({
            ...params,
            page: params.current,
            page_size: params.pageSize,
          })

          return Promise.resolve({
            success: true,
          })
        }}
        rowKey="_id"
        pagination={{
          total: data?.data?.totalDocs || 0,
          showQuickJumper: true,
          pageSizeOptions: [10, 20, 50],
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        search={{
          labelWidth: 'auto',
        }}
        dataSource={data?.data?.docs || []}
        dateFormatter="string"
        // headerTitle="Feedback"
        toolBarRender={() => [
          // <Button key="show">查看日志</Button>,
          // <Button key="out">
          //   导出数据
          //   <DownOutlined />
          // </Button>,
          // <Button type="primary" key="primary">
          //   创建应用
          // </Button>,
        ]}
      />
    </div>
  )
}
