import { Form } from 'antd'
import { useCallback, useRef, useState } from 'react'
import * as rrweb from 'rrweb'
import type { IFeedbackProps } from './type'
import { createContainer } from './unstate-next'

export type ITypes = 'bug' | 'feature'

export const CHECKBOX_KEY = 'feedback_policy_checkbox'
export const I18N_KEY = 'feedback_i18n_language_key'

export const FEEDBACK_CONFIG_KEY = '_feedback_config'

function useContext() {
  const [feedbackVisible, setFeedbackVisible] = useState(true)

  const [props, setProps] = useState<IFeedbackProps>()

  const [startFlag, setStartFlag] = useState(false)

  const eventsRef = useRef<any[]>([])
  const stopFnRef = useRef<any>()

  const [visible, setVisible] = useState(false)
  const [startTime, setStartTime] = useState<number>()

  const [recordToolVisible, setRecordToolVisible] = useState(false)

  const [events, setEvents] = useState<any[]>([])
  const [type, setType] = useState<ITypes | ''>('bug')

  const cancelFnRef = useRef<any>()

  const [form] = Form.useForm()

  const startRecord = useCallback(() => {
    eventsRef.current = []

    const stopFn = rrweb.record({
      emit(event) {
        eventsRef.current.push(event)
      },
      sampling: {
        input: 'last', // 连续输入时，只录制最终值
        scroll: 150, // 每 150ms 最多触发一次
      },
      plugins: [
        rrweb.getRecordConsolePlugin({
          level: ['error'],
          logger: window.console,
        }),
      ],
    })

    // eslint-disable-next-line prefer-const

    const cancelBase = () => {
      if (typeof stopFn === 'function') {
        try {
          stopFn()
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        }
      }
      setStartFlag(false)
      setRecordToolVisible(false)
      setVisible(true)
      setFeedbackVisible(true)
      setEvents([])
      stopFnRef.current = null
      cancelFnRef.current = null
    }

    const stop = async () => {
      cancelBase()
      setEvents(eventsRef.current)
    }

    const cancel = async () => {
      cancelBase()
    }

    setStartFlag(true)
    setFeedbackVisible(false)
    setStartTime(Date.now())
    stopFnRef.current = stop
    cancelFnRef.current = cancel
  }, [])

  const reset = useCallback(() => {
    form.setFieldsValue({
      email: undefined,
      description: undefined,
    })
    setType('')
    setEvents([])
    setRecordToolVisible(false)
    setVisible(false)
    eventsRef.current = []
    setStartTime(undefined)
  }, [form])

  const showRecordTool = useCallback(() => {
    setVisible(false)
    setRecordToolVisible(true)
    cancelFnRef.current = () => {
      setStartFlag(false)
      setRecordToolVisible(false)
      setVisible(true)
      setFeedbackVisible(true)
    }
  }, [])

  return {
    startRecord,
    type,
    setType,
    form,
    events,
    setEvents,
    visible,
    setVisible,
    startFlag,
    setStartFlag,
    stopFnRef,
    cancelFnRef,
    recordToolVisible,
    setRecordToolVisible,
    feedbackVisible,
    setFeedbackVisible,
    showRecordTool,
    reset,
    props,
    setProps,
    startTime
  }
}

const Container = createContainer(useContext)

export default Container
