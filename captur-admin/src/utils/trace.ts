export const appId = import.meta.env.VITE_APPID
export const appVer = import.meta.env.VITE_APPVER
export const traceState = `appid=${appId},appver=${appVer}`

/**
 * 生成 traceParent
 * 主要用于 trace 上报
 */
export function genTraceParent() {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  const version = '00'
  /** 上报抽样 01 否则 00 */
  // const traceFlag = '01'

  let traceId = ''
  let parentId = ''
  let count = 0

  while (count < 32) {
    // 16位 十六进制字符串
    if (count < 16) {
      parentId += arr[Math.floor(Math.random() * 16)]
    }

    // 32位 十六进制字符串
    traceId += arr[Math.floor(Math.random() * 16)]
    count++
  }

  return `${version}-${traceId}-${parentId}`
}
