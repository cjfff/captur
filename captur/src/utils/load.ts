type ILoadScriptPpops = {
  name: string
  url: string
}

export function loadScript({ name, url }: ILoadScriptPpops) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error(`to load script, url cannot be null`))
    }
    if (document.getElementById(name)) {
      resolve(true)
    } else {
      const node = document.getElementsByTagName('script')[0],
        script = document.createElement('script')
      script.setAttribute('id', name)
      script.setAttribute('src', url)

      script.onload = function () {
        resolve(true)
      }
      script.onerror = function (err) {
        script.remove()
        reject(err)
      }
      node.parentNode.insertBefore(script, null)
    }
  })
}

export function loadStyles({ name, url }: ILoadScriptPpops) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error(`to load style, url cannot be null`))
    }
    if (document.getElementById(name)) {
      resolve(true)
    } else {
      const head = document.getElementsByTagName('head')[0]
      const link = document.createElement('link')
      link.id = name
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = url
      link.media = 'all'

      link.onload = function () {
        resolve(true)
      }
      link.onerror = function (err) {
        link.remove()
        reject(err)
      }
      head.appendChild(link)
    }
  })
}

export function loadThridLibrary(data: ILoadScriptPpops & { type?: 'link' | 'script' }) {
  const { type = 'script', ...args } = data

  if (type === 'link') {
    return loadStyles(args)
  }

  return loadScript(args)
}
