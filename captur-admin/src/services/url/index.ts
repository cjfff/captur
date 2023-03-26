import map from './map'
import manage from './manage'
import user from './user'
import consts from './constant'
import validate from './validate'
import quickFix from './quickFix'

export interface UrlsType {
  [key: string]: {
    [key: string]: string
  }
}
const urls: UrlsType = {
  model: manage,
  user: user,
  map: map,
  const: consts,
  validate: validate,
  quickFix: quickFix,
}
export default urls
