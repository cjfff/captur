import type { FormInstance } from 'antd'
import { Button, Form, Input } from 'antd'
import React, { useMemo } from 'react'

import Rule from '@/components/Rules'
import Container from '@/Context'
import { useStore, useSubmit, useTranslation } from '@/hooks'
import RecordItem from '../RecordItem'
import styles from './index.module.less'
import PolicyCheckbox from './Policy'

type IReportForm = {
  form?: FormInstance
}

const ReportForm: React.FC<IReportForm> = ({ form }) => {
  const { reset, type, props } = Container.useContainer()
  const { t } = useTranslation()

  const { submit, loading } = useSubmit()
  const { store } = useStore()

  const descPlaceHolder = useMemo(() => {
    return type === 'bug' ? t('feedback.desc.error.tips') : t('feedback.desc.advise.tips')
  }, [t, type])

  return (
    <>
      <div className={styles.formWrap}>
        <Form
          form={form}
          initialValues={{
            agree: store?.get()?.checkbox,
          }}
        >
          <Form.Item name="email" rules={Rule.email} initialValue={props?.email}>
            <Input size="large" placeholder={t('feedback.form.email')} type="email" />
          </Form.Item>

          <Form.Item name="description" rules={Rule.description}>
            <Input.TextArea placeholder={descPlaceHolder} />
          </Form.Item>

          <RecordItem />

          {/* open the checkbox mode */}
          {props?.checkbox ? (
            <Form.Item name="agree" valuePropName="checked" rules={Rule.policyRule}>
              <PolicyCheckbox />
            </Form.Item>
          ) : null}

          <Form.Item className={styles.submitItem}>
            <div className={styles.buttonWrap}>
              <Button onClick={reset} disabled={loading}>
                {t('feedback.cancel')}
              </Button>
              <Button type="primary" onClick={submit} loading={loading}>
                {t('feedback.submit')}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default ReportForm
