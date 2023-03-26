import React from 'react'
import { Spin } from 'antd'
import styles from './index.module.less'

const FallbackLoading: React.FC = () => {
  return (
    <div className={styles.spinWrap}>
      <Spin size="large" spinning />
      {/* <p>loading...</p> */}
    </div>
  )
}

export default FallbackLoading
