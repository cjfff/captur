import React, { useEffect, useState } from 'react'
import { useMount } from 'ahooks'
import { checkLogin } from '@/store/userSlice'
import { useDispatch } from '@/store'
import modalLogin from '../ModalLogin'
import useQuery from '@/hooks/useQuery'
export type AuthorizedCustomElement = React.ReactElement | React.FC | (() => React.ReactElement)
export interface AuthorizedProps {
  children: AuthorizedCustomElement
}
const render = (Renderer: AuthorizedCustomElement) => {
  if (React.isValidElement(Renderer)) {
    return Renderer
  }
  if (typeof Renderer === 'function') {
    return <Renderer />
  }
  return null
}
export const WithAuthorized: React.FC<AuthorizedProps> = (props) => {
  const { children } = props
  const query = useQuery()
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)

  useMount(() => {
    if (!query?.ticket) {
      ;(async () => {
        try {
          const data = await dispatch(checkLogin())

          const { isLogined } = data

          if (isLogined === false) {
            setVisible(true)
            return
          }

          setVisible(false)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      })()
    }
  })

  useEffect(() => {
    // 本地不检验登录
    if (visible && process.env.NODE_ENV === 'production') {
      modalLogin()
    }
  }, [visible])

  return render(children)
}
