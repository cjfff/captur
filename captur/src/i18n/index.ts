import { I18N_KEY } from '@/Context'
import { en } from '@/locale/en'

const L = 'en' // global locale
const Ls = {} as any // global loaded locale

Ls[L] = en

const in18Map = {
  get map() {
    return Ls
  },
  t: function (key: string, data?: Record<string, any>) {
    const lang = window.localStorage.getItem(I18N_KEY)
    const map = Ls[lang || 'en'] || {}

    const word = map[key] || ''

    if (!data) {
      return word
    }

    return Object.entries(data).reduce((str, [key, value]) => {
      return str.replace(`{{${key}}}`, value)
    }, word)
  },
  locale(key: string,languageMap: Record<string, string>) {
    Ls[key] = languageMap
    return true
  }
}

export default in18Map
