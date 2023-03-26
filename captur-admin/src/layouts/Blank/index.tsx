import React from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import Layout from '@/layouts/Primary'

const Blank: React.FC<RouteConfigComponentProps<any>> = (props) => {
  const { route } = props
  if (route) {
    return <Layout>{renderRoutes(route.routes)}</Layout>
  }

  return null
}

export default Blank
