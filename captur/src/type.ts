import type { LangugesType } from './const'

export type IFeedbackProps = {
  extraParams?: {
    countryCode?: string
    username?: string
    sellerId?: string
    [key: string]: any
  }
  /**
   * when set as the initial email value.
   */
  email?: string

  uid?: string
  /**
   * power by xxx
   */
  brand?: string

  /**
   * custom the component
   */
  checkboxComponentFunction?: (value: string) => React.ReactNode
  // open the checkbox
  checkbox?: boolean

  appId?: string

  prefix?: string

  /**
   * 多语言
   */
  lang?: LangugesType
}
