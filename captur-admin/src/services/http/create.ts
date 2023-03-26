import { defaultsDeep } from 'lodash-es'
import Axios, { AxiosRequestConfig, AxiosInstance, AxiosInterceptorManager, AxiosResponse } from 'axios'
import RejectionReason from './RejectionReason'
import defaultAxiosRequestSettings from './defaultSettings'
import { OmitByValue, SetIntersection } from 'utility-types'
/**
 * 创建 Axios 实例
 * @param config 请求配置
 *
 * @description
 * 这里主要为了统一默认配置, 例如默认拦截器等
 */
function createAxios(config: AxiosRequestConfig = defaultAxiosRequestSettings): AxiosInstance {
  const finallyConfig: AxiosRequestConfig = defaultsDeep({}, config, defaultAxiosRequestSettings)
  const request: AxiosInstance = Axios.create(finallyConfig)

  request.interceptors.response.use(
    (response) => {
      const { status, config = {} } = response || {}
      const method = (config.method || 'GET').toLocaleUpperCase()

      /**
       * hidden body when method euqal DELETE
       * https://stackoverflow.com/questions/299628/is-an-entity-body-allowed-for-an-http-delete-request?answertab=active#tab-top
       */
      if (method === 'DELETE') {
        response.data =
          status >= 200 && status < 300
            ? {
                code: 0,
                message: 'SUCCESS',
                data: {},
                success: true,
              }
            : {
                code: -1,
                message: 'error',
                data: null,
                success: false,
              }
      }

      return response
    },
    (rejection) => {
      if (!rejection || rejection?.response?.status === 0) {
        return Promise.reject(new RejectionReason('无法连接网络，请检查网络设置', rejection))
      }

      if (rejection instanceof Error && !Object.prototype.hasOwnProperty.call(rejection, 'response')) {
        return Promise.reject(rejection)
      }

      if (rejection.toJSON().message === 'Network Error') {
        return Promise.reject(new RejectionReason('网络连接异常', rejection))
      }

      const {
        status,
        config,
        data: response,
      } = rejection?.response || {
        status: undefined,
        config: undefined,
        data: undefined,
      }

      const method = (config.method || '').toUpperCase()

      // 无法发出请求
      if (status === 0) {
        const reason = new RejectionReason('无法发出请求，请检查头部信息', rejection)
        return Promise.reject(reason)
      }

      // 资源不存在
      if (status === 404) {
        if (['POST', 'PUT', 'DELETE'].indexOf(method) !== -1) {
          const reason = new RejectionReason('无法提交数据，请确认来源正确', rejection)
          return Promise.reject(reason)
        }

        const message = response.msg || response.message
        const reason = new RejectionReason(message || '请求资源错误', rejection)
        return Promise.reject(reason)
      }

      // 资源已经被删除
      if (status === 410) {
        const message = response.msg || response.message
        const reason = new RejectionReason(message || '当前资源已经被移除', rejection)
        return Promise.reject(reason)
      }

      if (status === 433) {
        const message = response.msg || response.message
        const reason = new RejectionReason(message || '服务器繁忙，请稍后重试', rejection)
        return Promise.reject(reason)
      }

      // 服务器异常
      if (status >= 500 && status < 600) {
        const message = response.msg || response.message
        const reason = new RejectionReason(message || '服务器繁忙', rejection)
        return Promise.reject(reason)
      }
      const message = response.msg || response.message
      const reason = new RejectionReason(message || '网络错误', rejection)
      return Promise.reject(reason)
    }
  )

  return request
}

/**
 * 创建不同的 HTTP
 * @param options 域名配置
 * @param config axios 默认配置
 *
 * @description
 * 因为域名, 环境等原因额外创建一个基于 Axios
 * 扩展的方法;
 * 根据不同的业务对其进行添加或修改
 *
 * * (注意) 这里不能 Axios 原有功能进行修改,
 * * 以防跟官方文档不一样造成学习成本;
 * * 但可以扩展方法方便调用
 */
function create<A>(domains: DomainCollection<A>, config?: AxiosRequestConfig): HttpInstance<DomainCollection<A>> {
  const Requestors = createAxios(config) as HttpInstance<DomainCollection<A>>
  let env = import.meta.env.VITE_APP_ENV || 'product'
  const protocol = '//'
  if (['develop', 'preview', 'product'].indexOf(env) === -1) {
    env = 'product'
  }

  ;(Object.keys(domains) as Array<keyof A>).forEach((name) => {
    const item = domains[name]
    const { interceptors, extensions } = item
    const host = item[env]
    const baseURL = /^https:?\/\//.test(host) ? host : `${protocol}${host}`
    const requestor = createAxios({ ...config, baseURL })
    Requestors[name] = requestor as any

    if (typeof interceptors === 'function') {
      interceptors(requestor.interceptors)
    }

    if (typeof extensions !== 'undefined') {
      ;(Object.keys(extensions) as Array<keyof typeof extensions>).forEach((ename) => {
        const fn = (extensions[ename] as any).bind(requestor)
        if (typeof fn === 'function') {
          Object.assign(requestor, { [ename]: fn })
        }
      })
    }
  })

  return Requestors
}

export type Get<B extends Record<string, any>, T extends string, D = unknown> = OmitByValue<
  {
    [K in T]: [SetIntersection<K, keyof B>] extends [never] ? D : SetIntersection<K, keyof B>
  },
  never
>
/** 拦截器配置 */
export type Interceptors = {
  request: AxiosInterceptorManager<AxiosRequestConfig>
  response: AxiosInterceptorManager<AxiosResponse>
}
/** 配置域名 */
export type Domain<E> = {
  develop: string
  test: string
  preview: string
  product: string
  interceptors?: (interceptors: Interceptors) => void
  extensions?: E & ThisType<AxiosInstance & E>
}
/** 配置域名集合 */
export type DomainCollection<A> = {
  [K in keyof A]: Domain<A[K]>
}
/** 请求实例 */
export type HttpInstance<A> = AxiosInstance & {
  [K in keyof A]: Get<A[K], 'extensions', never> & AxiosInstance
}
export default create
