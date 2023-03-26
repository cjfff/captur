import API from '@/services/http'

type IRecordQuery = {
  appId: string
}

export const getRecords = (data: IRecordQuery) => {
  return API.admin.get<any>('/captur/apis/feedback/list', {params: data})
}

export const getRecordDetail = (id: string) => {
  return API.admin.get<any>(`/captur/apis/feedback/${id}`)
}
