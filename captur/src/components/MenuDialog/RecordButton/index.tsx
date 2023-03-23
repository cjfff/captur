import { Button } from 'antd'
import React from 'react'
import { useTranslation } from '../../../hooks'
import styles from './index.module.less'

const RecordButton: React.FC<React.ComponentProps<typeof Button>> = (props) => {
  const { t } = useTranslation()

  return (
    <Button {...props} type="dashed" className={styles.button}>
      <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-icon="Video">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7.81a4.19 4.19 0 1 0 0 8.38 4.19 4.19 0 0 0 0-8.38ZM9.524 12a2.476 2.476 0 1 1 4.952 0 2.476 2.476 0 0 1-4.952 0Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.667 4A4.667 4.667 0 0 0 4 8.667v6.666A4.667 4.667 0 0 0 8.667 20h6.666A4.667 4.667 0 0 0 20 15.333V8.667A4.667 4.667 0 0 0 15.333 4H8.667ZM5.714 8.667a2.952 2.952 0 0 1 2.953-2.953h6.666a2.952 2.952 0 0 1 2.953 2.953v6.666a2.952 2.952 0 0 1-2.953 2.953H8.667a2.952 2.952 0 0 1-2.953-2.953V8.667Z"
        ></path>
      </svg>
      {t('feedback.start')}
    </Button>
  )
}

export default RecordButton
