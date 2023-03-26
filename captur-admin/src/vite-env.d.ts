/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<any, any>> {
  /* 构建的环境变量 */
  readonly VITE_APP_ENV: 'develop' | 'test' | 'preview' | 'product'
  readonly VITE_SERVICE_APPKEY: string
  readonly VITE_DOMAIN: string
  readonly VITE_TRACE_APP_KEY: string
  readonly VITE_TRACE_GET_CHANGE_HOST: string
  readonly VITE_APPID: string
  readonly VITE_APPVER: string
  readonly VITE_LOGIN_HOST: string
}
