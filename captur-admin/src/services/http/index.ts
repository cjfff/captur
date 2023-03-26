import { cloneDeep } from 'lodash'
import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { Assign, FunctionKeys } from 'utility-types'
import create from './create'
import { setTraceInfo } from './trace'
import { message } from 'antd'
import modalLogin from '@/components/ModalLogin'

/**
 * 因为每个域都可能有所不同,
 * 因此这里使用可以根据配置来对
 * 不同的域名进行不同的操作
 *
 * 如果出现结果处理或请求数据`在该特定域名下`需要特殊处理
 * 这里可以引入拦截器 (inteceptor) 配置;
 *
 * @example
 * export default {
 *   api: {
 *     interceptors ({ request, response }) {
 *        // 方式跟 ajax 添加拦截器一样
 *        request.use(...)
 *        response.use(...)
 *     }
 *   }
 * }
 *
 * * (注意) 如果是默认配置的修改可以直接在
 * * `@/services/http/create.js` 进行全局修改
 */

/**
 * 登录失效，返回code：LST-133242-A0006
 * 鉴权失败，返回code：LST-133242-A0007
 * 缺少cookie，返回code：LST-133693-A0001
 */
const authCode = ['LST-133242-A0006', 'LST-133242-A0007', 'LST-133693-A0001']

const instance = create({
  admin: {
    develop: '',
    test: '',
    preview: '',
    product: '',
    interceptors(inteceptor: AxiosInstance['interceptors']) {
      inteceptor.request.use(async (requestOptions: AxiosRequestConfig) => {
        const finalOptions = cloneDeep(requestOptions)
        // 接入trace
        setTraceInfo(finalOptions)
        // 在外面获取会导致获取出来的是undefined，从而使得locallanguage 是en
        // 因为用户可能改设置，所以这里改成实时读

        // finalOptions.data = defaultsDeep(finalOptions.data, { })
        return finalOptions
      })

      inteceptor.response.use((response: AxiosResponse<any>) => {
        const { data } = response
        const { code, message: msg } = data

        if (code === 'SUCCESS' || code === 0) {
          return data
        }

        // 未登入等cookie相关错误
        if (authCode.includes(code)) {
          modalLogin()
        }
        // eslint-disable-next-line no-console
        console.log(msg)
        message.error(msg)
        return Promise.reject({
          ...data,
          message,
        })
      })
    },
  },
})

type GatwayResponseBodyData = {
  isSuccess: boolean
  code?: string
  message?: string
  extMap?: any
}

type GatwayResponseBody<T extends Record<string, any> = any> = {
  data: Assign<GatwayResponseBodyData, T>
  code: string
  message: string
  bizCode?: string
  bizMessage?: string
  timestamp?: string
  sign?: string
  signType?: string
  channel?: string
  api?: string
}

type GatwayInterceptor<T extends AxiosInstance> = Assign<
  T,
  {
    [K in FunctionKeys<AxiosInstance>]: <R = any>(...args: Parameters<T[K]>) => Promise<GatwayResponseBody<R>>
  }
>

type HttpInstance = typeof instance

type RewritedHttpInstance = {
  admin: GatwayInterceptor<HttpInstance['admin']>
}

export default instance as any as Assign<HttpInstance, RewritedHttpInstance>
