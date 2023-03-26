export interface UserInfo {
  id: number
  uid: string
  email: string
}
export interface UserInitState {
  isLogined: boolean
  uid: string
  email: string
  departmentId?: string
}
export interface UserState {
  isLogined: boolean
  uid: string
  email: string
  departmentId?: string
}
