import { useCallback, useMemo } from 'react'
import Container from '../Context'
import in18nMaps from '../i18n'

export const useTranslation = () => {
  const { props } = Container.useContainer()

  const data = useMemo(() => {
    return in18nMaps.map[props?.lang] || {}
  }, [props?.lang])

  const t = useCallback(
    (key: string) => {
      return data[key]
    },
    [data]
  )

  return { t }
}
