/** 解析 url query */
export const parseQuery = (query: string) => {
  const queryObject: Record<string, any> = {}
  const queryString = query[0] === '?' ? query.substring(1) : query
  if (!queryString) {
    return null
  }

  const params = queryString.split('&')
  for (let i = 0; i < params.length; i++) {
    const [key, value] = decodeURIComponent(params[i]).split('=')
    if (typeof value === 'undefined') {
      queryObject[key] = undefined
      continue
    }

    const namespaces = key.split('[').reduce<Array<number | string>>((namespaces, content) => {
      const [name] = content.split(']')
      const key = isNaN(Number(name)) ? name.replace(/\"/g, '') : Number(name)
      return namespaces.concat(key)
    }, [])

    namespaces.reduce<Record<string, any>>((queryObject, name, index) => {
      // 结束才赋值
      if (index === namespaces.length - 1) {
        queryObject[name] = isNaN(Number(value)) ? value.replace(/\"/g, '') : Number(value)
        return queryObject
      }

      if (typeof name === 'string') {
        if (typeof queryObject[name] !== 'object') {
          const next = namespaces[index + 1]
          queryObject[name] = typeof next === 'number' ? [] : {}
        }

        return queryObject[name]
      }

      return queryObject
    }, queryObject)
  }

  return queryObject
}

/** 字符串华 url query */
export const stringifyQuery = (data: Record<string, any>, prefix: string = '') => {
  const queryString: string[] = []

  if (Array.isArray(data)) {
    data.forEach((value, name) => {
      const key = prefix ? `${prefix}[${name}]` : `${name}`
      if (typeof value !== 'undefined') {
        if (value !== null && typeof value === 'object') {
          const string = stringifyQuery(value, key)
          string && queryString.push(string)
        } else {
          const part = `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`
          queryString.push(part)
        }
      }
    })
  } else if (typeof data === 'object') {
    Object.keys(data).forEach((name) => {
      if (data.hasOwnProperty(name)) {
        const key = prefix ? `${prefix}["${name}"]` : name
        const value = data[name]
        if (typeof value !== 'undefined') {
          if (typeof value === 'object') {
            if (value !== null) {
              const string = stringifyQuery(value, key)
              string && queryString.push(string)
            } else {
              const part = `${encodeURIComponent(key)}`
              queryString.push(part)
            }
          } else {
            const part = `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`
            queryString.push(part)
          }
        }
      }
    })
  }

  return queryString.join('&')
}
