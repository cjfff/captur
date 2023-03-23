import { useTranslation } from '@/hooks'
import classNames from 'classnames'
import React from 'react'
import Tooltip from '../components/Tooltip'
import styles from './index.module.less'

const BtnRecord: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tooltip title={t('feedback.stop')}>
      <div className={classNames(styles.btn, styles.closeBtn)} {...props}>
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM10 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4Z"
            fill="#F86140"
          ></path>
        </svg>
      </div>
    </Tooltip>
  )
}

export default BtnRecord
