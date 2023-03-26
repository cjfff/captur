import { Route } from '@ant-design/pro-layout/lib/typings'
import { map, omit, trim, cloneDeep } from 'lodash-es'
import { RouteConfig } from 'react-router-config'

/**
 * 主要用于将相对地址改成绝对地址
 * @param routes 路由配置
 * @param parent 父节点路径
 */
export function absRoutes(routes: RouteConfig[] = [], parent = ''): RouteConfig[] {
  if (!Array.isArray(routes)) {
    return []
  }

  return routes.map((route) => {
    let absPath = route.path
    if (typeof absPath === 'string') {
      if (absPath.search(parent) === -1) {
        absPath = [parent, route.path].join('/')
        absPath = `/${trim(absPath, '/')}`
        absPath = absPath.replace(/\/+/g, '/')
      }

      if (Array.isArray(route.routes) && route.routes.length > 0) {
        const children = absRoutes(route.routes, absPath)

        return {
          ...route,
          path: absPath,
          routes: children,
        }
      }
    }

    return { ...route, path: absPath }
  })
}

/**
 * 将地址转成 ant layout 的配置
 * @param routes 路由配置
 */
export function antRoutes(routes: RouteConfig[] = []): Route[] {
  if (!Array.isArray(routes)) {
    return []
  }

  const validRoutes = routes.filter((route) => route.menuTitle)
  if (validRoutes.length === 0) {
    return []
  }

  return validRoutes.map((route) => {
    const antRoute: Route = {
      ...omit(route, ['component', 'menuTitle']),
      name: route.menuTitle,
    }

    if (Array.isArray(route.routes) && route.routes.length > 0) {
      return {
        ...antRoute,
        routes: antRoutes(route.routes),
      }
    }

    return antRoute
  })
}

/**
 * 遍历路由配置
 * @param routes 路由
 * @param handle 每个路由配置的处理方法
 */
export function travelRoutes(routes: RouteConfig[], handle: (routes: RouteConfig) => RouteConfig[]): RouteConfig[] {
  if (typeof handle !== 'function') {
    return []
  }

  return map(routes, (route) => {
    const clonedRoute: RouteConfig = cloneDeep(route)
    if (clonedRoute.routes && clonedRoute.routes.length > 0) {
      clonedRoute.routes = travelRoutes(clonedRoute.routes, handle).filter(Boolean)
    }

    return handle(clonedRoute)
  })
}
