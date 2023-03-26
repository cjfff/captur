import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getRecords } from '@/services/apis'

import styles from './index.module.less'

import type { ProColumns } from '@ant-design/pro-table'
import ProTable from '@ant-design/pro-table'

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
    title: 'feedback email',
    width: 160,
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: 'feedback content',
    width: 80,
    hideInSearch: true,
    dataIndex: 'description',
  },
  {
    title: 'createTime',
    width: 140,
    dataIndex: 'createdAt',
    hideInSearch: true,
    valueType: 'dateTime',
  },
  ,
  {
    title: 'operation',
    renderText: (item: any) => {
      const { id } = item
      return (
        <>
          <a href={`${location.pathname}/${id}`} target="_blank" rel="noopener noreferrer" key="view">
            detail
          </a>
        </>
      )
    },
  },
] as any

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
        rowKey="id"
        pagination={false}
        search={{
          labelWidth: 'auto',
        }}
        dataSource={(data?.data as any) || []}
        dateFormatter="string"
      />
    </div>
  )
}
