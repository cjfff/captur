import React from 'react'
import { HeaderLayout } from './HeaderLayout'
import { Layout } from 'antd'
import { ConfigProvider } from 'antd'
import locale from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
moment.locale('zh-cn')

import './primaryLayout.less'

const { Header, Content } = Layout

const Primary: React.FC = ({ children }) => {
  return (
    <Layout className={`nd-layout`}>
      <Header className="nd-layout-header">
        <HeaderLayout />
      </Header>
      <Content className="nd-layout-content">
        <ConfigProvider locale={locale}>{children}</ConfigProvider>
      </Content>
    </Layout>
  )
}

export default Primary
