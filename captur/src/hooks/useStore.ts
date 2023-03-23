import Container, { FEEDBACK_CONFIG_KEY } from '@/Context'
import { useMemo } from 'react'

export class StoreUtil {
  uid: string

  constructor(uid: string) {
    this.uid = uid
  }

  _getObject() {
    const data = localStorage.getItem(FEEDBACK_CONFIG_KEY)
    try {
      const realData = data ? JSON.parse(data) : {}

      return realData
    } catch (error) {
      return {}
    }
  }

  get(): IStore {
    const _data = this._getObject()

    if (this.uid) {
      return _data[this?.uid] || {}
    }

    return _data
  }

  set(input: Partial<IStore>) {
    const data = this._getObject()
    const _originalData = {
      ...this.get(),
      ...input,
    }

    if (this.uid) {
      Object.assign(data, {
        [this.uid]: _originalData,
      })
    } else {
      Object.assign(data, _originalData)
    }

    localStorage.setItem(FEEDBACK_CONFIG_KEY, JSON.stringify(data))

    return true
  }
}

interface IStore {
  showGuide?: number
  checkbox?: number
}

export function useStore() {
  const { props } = Container.useContainer()
  const store = useMemo(() => {
    const store = new StoreUtil(props?.uid!)

    return store
  }, [props?.uid])

  return {
    store,
  }
}
