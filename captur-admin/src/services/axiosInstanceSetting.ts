import { message } from 'antd'
import { AxiosInstance } from 'axios'
// import { cloneDeep } from 'lodash-es'
// import { setTraceInfo } from './http/trace'
import { errorHandlerMiddleware } from './middleware/errorHandler'

/**
1**: 第三方服务错误，通常这种错误在业务代码都会有兜底，所以错误等级比较低
e100: StringType( 第三方服务错误"），

2**: 一般业务错误 (controller)
e200: StringType(•一般业务错误"），

3**: service错误
e301: StringType("用户不存在”），
e302: StringType("非法id"），
e303: StringType(’找不到数据，）
e304: StringType（‘配置缺失，），
e305: StringType(•数据格式不正确。），

4** 数据库错误
5**：鉴权错误
e501： StringType(“鉴权错误"）
 */

message.config({
  maxCount: 3,
})

export const setAxios = (axiosInstance: AxiosInstance) => {
  // inteceptor.request.use(async (requestOptions: AxiosRequestConfig) => {
  //   const finalOptions = cloneDeep(requestOptions)
  //   // 接入trace
  //   setTraceInfo(finalOptions)
  //   // 在外面获取会导致获取出来的是undefined，从而使得locallanguage 是en
  //   // 因为用户可能改设置，所以这里改成实时读

  //   // finalOptions.data = defaultsDeep(finalOptions.data, { })
  //   return finalOptions
  // })

  axiosInstance.interceptors.response.use(errorHandlerMiddleware as any)
}
