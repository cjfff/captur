import { useTranslation } from '@/hooks'
import classNames from 'classnames'
import React from 'react'
import Tooltip from '../components/Tooltip'
import styles from './index.module.less'

const CloseBtn: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tooltip title={`${t('feedback.close')} ESC`}>
      <div className={classNames(styles.closeBtn, styles.btn)} {...props}>
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.364 5.364a.9.9 0 0 1 1.272 0L12 10.727l5.364-5.363a.9.9 0 0 1 1.273 1.272L13.273 12l5.364 5.364a.9.9 0 1 1-1.273 1.272L12 13.273l-5.364 5.363a.9.9 0 0 1-1.272-1.272L10.727 12 5.364 6.636a.9.9 0 0 1 0-1.272Z"
            fill="#00112F"
          ></path>
        </svg>
      </div>
    </Tooltip>
  )
}

export default CloseBtn
