import { Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getRecordDetail } from '@/services/apis'
import { useLoadReplay } from './utils'

import styles from './index.module.less'

export type TableListItem = {
  key: number
  name: string
  containers: number
  creator: string
  status: string
  createdAt: number
  memo: string
}

export default () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useRequest(() => {
    return getRecordDetail(id)
  })

  useLoadReplay(data?.data)

  return (
    <Spin wrapperClassName={styles.layout} spinning={loading}>
      <div id="feedback"></div>
    </Spin>
  )
}
