import API from '@/services/http'

export const fetch = (params: { a: string }) => API.post('/user', params)

interface LoginRes {
  _id?: string
  name?: string
  role?: { _id?: string; name?: string }
  valid?: number
  create_time?: string
  update_time?: string
  __v?: number
  email?: string
  jiar_id?: string
  department?: { _id?: string; name?: string }
}

export const AuthLoginCreate = (serviceTicket: string) => {
  return API.admin.post<LoginRes>(`/nodelay-server/api/v1/auth/login`, { serviceTicket })
}

export const usersJiraTokenCreate = (data: any) => {
  return API.admin.post(`/nodelay-server/api/v1/users/jira-token`, data)
}
