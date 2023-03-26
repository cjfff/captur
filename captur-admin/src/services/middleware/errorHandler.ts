import modalLogin from '@/components/ModalLogin'
import { message } from 'antd'
import { AxiosResponse } from 'axios'
import { ERROR, FailResponseBody, ResponseBody, SuccessResponseBody } from '../type'

const defaultErrorHandler = (data: FailResponseBody) => {
  message.error({
    key: data.code,
    content: data.message,
  })
}

export function errorHandlerMiddleware(
  response: AxiosResponse<ResponseBody<any>>
): AxiosResponse<SuccessResponseBody<any>> | Promise<AxiosResponse<SuccessResponseBody<any>>> {
  if (response.data.success === true) return response as AxiosResponse<SuccessResponseBody<any>>
  switch (response.data.code) {
    case ERROR.NO_AUTHENTICATION:
      modalLogin()
      break
    case ERROR.NO_JIRA_TOKEN:
      // modalJiraForm()
      break
    default:
      defaultErrorHandler(response.data)
  }
  return Promise.reject(response.data)
}
