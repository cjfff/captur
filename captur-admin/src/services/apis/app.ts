import API from '@/services/http'

type IAPPType = {
  name: string
  appId: string
}

export const getAppList = () => {
  return API.admin.get<{
    count: number
    list: IAPPType[]
  }>('/captur/apis/app/list')
}

export const createApp = (data: { appId: string; name: string }) => {
  return API.admin.post('/captur/apis/app', data)
}
