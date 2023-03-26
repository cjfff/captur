export enum ERROR {
  /**
   *  1**: 第三方服务错误，通常这种错误在业务代码都会有兜底，所以错误等级比较低
   */
  THIRD_PART = 'e100',
  /**
   *  2**: 一般业务错误（controller）
   */
  NORMAL = 'e200',
  //3**: service 错误
  /**
   * 用户不存在
   */
  USER_NOT_EXIST = 'e301',
  /**
   * 非法id
   */
  ILLEGAL_ID = 'e302',

  /**
   * 找不到数据
   */
  DATA_NOT_EXIST = 'e303',

  /**
   * 配置缺失
   */
  CONFIG_NOT_EXIST = 'e304',
  // 5**: 鉴权错误
  /**
   * 鉴权错误
   */
  NO_AUTHENTICATION = 'e501',

  /**
   * Jira鉴权错误
   */
  NO_JIRA_TOKEN = 'e502',
}

export type SuccessResponseBody<T> = {
  code: 0
  success: true
  message: string
  data: T
}

export type FailResponseBody = {
  code: ERROR
  success: false
  message: string
}

export type ResponseBody<T> = SuccessResponseBody<T> | FailResponseBody
