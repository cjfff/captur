/**
 * 动态加载JS
 * @param {string} url 脚本地址
 * @param {function} callback  回调函数
 */
export function dynamicLoadJs(url: string, id: string) {
  if (document.querySelector(`#${id}`)) return Promise.resolve()

  const head = document.getElementsByTagName('head')[0]
  const script = document.createElement('script')

  script.type = 'text/javascript'
  script.src = url
  script.id = id
  head.appendChild(script)

  return new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = reject
  })
}

/**
 * 动态加载CSS
 * @param {string} url 样式地址
 */
export function dynamicLoadCss(url: string, id: string) {
  if (document.querySelector(`#${id}`)) return Promise.resolve()
  const head = document.getElementsByTagName('head')[0]
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  link.id = id
  head.appendChild(link)

  return new Promise((resolve, reject) => {
    link.onload = resolve
    link.onerror = reject
  })
}
