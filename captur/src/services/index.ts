const host = '/captur/apis'

interface ICreateFeedback {
  appId: number
  email: string
  description: string
  valid?: number
  recordJson: string
  prefix?: string
}

/**
 * 创建 feedback
 * @param data
 * @returns
 */
export const createFeedback = async (data: ICreateFeedback) => {
  return fetch(`${data.prefix}${host}/feedback`,{
    headers: {
      "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
}
