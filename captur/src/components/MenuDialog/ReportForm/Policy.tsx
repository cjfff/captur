import Container from '@/Context'
import { useStore, useTranslation } from '@/hooks'
import { Checkbox } from 'antd'
import React, { useMemo } from 'react'
import styles from './index.module.less'

const Policy: React.FC = () => {
  const { props } = Container.useContainer()
  const { t } = useTranslation()

  const checkBoxText = useMemo(() => {
    return props?.checkboxComponentFunction ? props?.checkboxComponentFunction(t('feedback.checkbox')) : t('feedback.checkbox')
  }, [props, t])

  return (
    <>
      <span
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        {checkBoxText}
      </span>
    </>
  )
}

const PolicyCheckbox = (props) => {
  const { store } = useStore()
  const onChange = (e) => {
    const value = e.target.checked
    props?.onChange(value)
    store.set({
      checkbox: Number(value),
    })
  }
  return (
    <div className={styles.policyWrap}>
      <Checkbox {...props} onChange={onChange}>
        <Policy />
      </Checkbox>
    </div>
  )
}

export default PolicyCheckbox
