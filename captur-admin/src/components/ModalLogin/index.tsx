import { Modal } from 'antd'
import { noAuthRoutes } from '@/routers'
let showLoginModal = false

const modalLogin = () => {
  const service = encodeURI(`${window.location.protocol}//${window.location.host}/login`)
  const key = import.meta.env.VITE_SERVICE_APPKEY
  const loginPost = import.meta.env.VITE_LOGIN_HOST
  const loginUlr = `https://${loginPost}/user/signIn?login_type=gmail&serviceAppKey=${key}&service=${service}`

  if (!showLoginModal) {
    showLoginModal = true
    if (!noAuthRoutes.includes(window.location.pathname)) {
      return Modal.warning({
        maskClosable: false,
        title: '系统消息',
        content: '当前不是登陆态， 是否跳转登陆？',
        okText: '登陆',
        keyboard: false,
        closable: false,
        onOk: () => {
          showLoginModal = false
          window.location.href = loginUlr
        },
      })
    }
  }
}
export default modalLogin
