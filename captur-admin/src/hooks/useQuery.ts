import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { parseQuery } from '../utils/url'

const useQuery = <T extends Record<string, any>>() => {
  const location = useLocation()
  const search = useMemo(() => location.search, [location.search])
  const query = useMemo<T>(() => parseQuery(search) as T, [search])
  return query
}

export default useQuery
