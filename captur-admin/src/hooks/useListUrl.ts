import { useLocation } from 'react-router-dom'
import url from '@/services/url'
import { useMemo } from 'react'

/** 匹配列表页的接口配置 */
const useSearchTableList = () => {
  const location = useLocation()
  const config = useMemo(() => {
    const key = location.pathname.split('/')
    const module = url?.[key[2]]
    return { module, feature: module?.[key[3]] }
  }, [location.pathname])

  return config
}

export default useSearchTableList
