import React from 'react'
import { Redirect } from 'react-router'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { absRoutes } from '@/utils/route'
import feedback from './feedback'
import Blank from '@/layouts/Blank'

const routerConfig: RouteConfig[] = [
  {
    path: '/',
    component() {
      return <Redirect to="/admin/projects" />
    },
    exact: true,
  },
  {
    path: '/login',
    component: React.lazy(() => import('@/containers/Login/index')),
    exact: true,
  },
  {
    path: '/admin',
    component: Blank,
    routes: [
      ...feedback,
      {
        path: '/*',
        component() {
          return <Redirect to="/pageNotFound" />
        },
      },
    ],
  },
  {
    path: '/pageNotFound',
    component: React.lazy(() => import('@/components/PageNotFound')),
  },
  {
    path: '/*',
    component() {
      return <Redirect to="/pageNotFound" />
    },
  },
]

export const routes = absRoutes(routerConfig)

/* 不用权限判断的路由 */
export const noAuthRoutes: string[] = ['/sop/model/share', '/translate/i18n/editor']
getNoAuthRoute(routes)
function getNoAuthRoute(routerConfig: RouteConfig[]) {
  routerConfig.forEach(({ routes, path, noAuth }) => {
    if (routes) {
      getNoAuthRoute(routes)
    }
    noAuth && path && noAuthRoutes.push(path as string)
  })
}

const Router: React.FC = () => {
  return renderRoutes(routes)
}

Router.displayName = 'Router'
export default Router
