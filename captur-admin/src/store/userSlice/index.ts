import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { UserInitState, UserState } from '@/types/user'
import { AppDispatch, AppGetState } from '..'

const initialState: UserInitState = {
  isLogined: !!Cookies.get('OFASID'), // OFASID后端凭证
  email: Cookies.get('email') || '',
  uid: Cookies.get('uid') || '',
  departmentId: '',
}

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLogin(state, action: PayloadAction<UserState>) {
      return {
        ...state,
        isLogined: action.payload.isLogined,
        uid: action.payload.uid,
        email: action.payload.email,
        departmentId: action.payload.departmentId,
      }
    },
  },
})

export const checkLogin = () => async (dispatch: AppDispatch, getState: AppGetState) => {
  const { isLogined } = getState().user
  const uid = Cookies.get('uid') || ''
  const email = Cookies.get('email') || ''
  // todo:临时方案
  // const isLogined = !!email
  const newUserState: UserState = {
    isLogined: isLogined || !!email, // 判断登录态：先根据isLogined判断，再更具是否有email判断,
    uid,
    email,
  }

  dispatch(actions.setLogin(newUserState))
  return newUserState
}

export const logout = () => (dispatch: AppDispatch) => {
  Cookies.remove('uid')
  Cookies.remove('email')
  Cookies.remove('OFASID')
  dispatch(actions.setLogin({ isLogined: false, uid: '', email: '' }))
  const service = encodeURI(`${window.location.protocol}//${window.location.host}/login`)
  const logoutUrl = `https://${import.meta.env.VITE_LOGIN_HOST}/user/signOut?login_type=gmail&serviceAppKey=${
    import.meta.env.VITE_SERVICE_APPKEY
  }&service=${service}`
  window.location.href = logoutUrl
}

export default reducer
