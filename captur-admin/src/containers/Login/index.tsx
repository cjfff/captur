import useQuery from '@/hooks/useQuery'
import { useMount } from 'ahooks'
import { useDispatch } from '@/store'
import { actions } from '@/store/userSlice'
import { useHistory } from 'react-router'
import { message } from 'antd'
import Cookies from 'js-cookie'
import { AuthLoginCreate } from '@/services/home'

const LoginPage = () => {
  const { ticket } = useQuery()
  const dispatch = useDispatch()
  const history = useHistory()
  useMount(async () => {
    if (ticket) {
      try {
        const { data } = await AuthLoginCreate(ticket)
        const { department, role } = data || {}

        await dispatch(
          actions.setLogin({ isLogined: true, uid: data?._id || '', email: data?.email || '', departmentId: data?.department?._id })
        )
        Cookies.set('uid', data?._id || '', { expires: 21 })
        Cookies.set('email', data?.email || '', { expires: 21 })
        Cookies.set('department', department?._id || '', { expires: 21 })
        Cookies.remove('showLoginModal')

        localStorage.setItem('department-name', department?.name || '')
        localStorage.setItem('role-name', role?.name || '')

        history.push('/admin/projects')
      } catch (error) {
        message.error('error')
        history.push('/')
      }
    }
  })
  return <></>
}

export default LoginPage
