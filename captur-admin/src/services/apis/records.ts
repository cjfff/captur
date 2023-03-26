import API from '@/services/http'

type IRecordQuery = {
  appId: string
}

export const getRecords = (data: IRecordQuery) => {
  return API.admin.post<any>('/ones/api/v1/feedback/records', data)
}

export const getRecordDetail = (id: string) => {
  return API.admin.post<any>(`/ones/api/v1/feedback/record/${id}`)
}
