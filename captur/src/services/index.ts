const host = '/ones/api/v1'

interface ICreateFeedback {
  app_id?: string
  uid?: string
  username?: string
  email?: string
  description?: string
  title?: string
  replay_url?: string
  countryCode: string
}

/**
 * 创建 feedback
 * @param data
 * @returns
 */
export const createFeedback = async (data: ICreateFeedback) => {
  return fetch({
    url: `${host}/create`,
    body: JSON.stringify(data)
  })
}
