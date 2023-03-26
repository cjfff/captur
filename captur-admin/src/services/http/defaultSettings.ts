import { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
  params: {},
  withCredentials: true,
  timeout: 30e3,
}

export default config
