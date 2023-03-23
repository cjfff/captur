import { useTranslation } from '@/hooks'
import classNames from 'classnames'
import React from 'react'
import styles from './index.module.less'
import Tooltip from './Tooltip'

const BtnRecord: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { t } = useTranslation()
  return (
    <div>
      <Tooltip title={t('feedback.start')}>
        <div className={classNames(styles.btn, styles.recordBtn)} {...props}>
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: rgb(53, 192, 142); font-size: 24px;">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.6 8.5a4.9 4.9 0 0 1 4.9-4.9h7a4.9 4.9 0 0 1 4.9 4.9v7a4.9 4.9 0 0 1-4.9 4.9h-7a4.9 4.9 0 0 1-4.9-4.9v-7Zm4.9-3.1a3.1 3.1 0 0 0-3.1 3.1v7a3.1 3.1 0 0 0 3.1 3.1h7a3.1 3.1 0 0 0 3.1-3.1v-7a3.1 3.1 0 0 0-3.1-3.1h-7Z"
              fill="#415066"
            ></path>
            <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#F86140"></path>
          </svg>
        </div>
      </Tooltip>
    </div>
  )
}

export default BtnRecord
