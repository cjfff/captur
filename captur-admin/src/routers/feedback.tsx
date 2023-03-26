import React from 'react'

import type { RouteConfig } from 'react-router-config'

export default [
  {
    path: '/projects',
    component: React.lazy(() => import('@/containers/AppList')),
    exact: true,
    menuTitle: 'app list',
  },
  {
    path: '/projects/:appId',
    component: React.lazy(() => import('@/containers/Records')),
    exact: true,
    menuTitle: 'Records',
  },
  {
    path: '/projects/:appId/:id',
    component: React.lazy(() => import('@/containers/RecordDetail')),
    exact: true,
    menuTitle: 'detail',
  },
] as RouteConfig[]
