import React from 'react'
import styles from './index.module.less'

const ToolTip: React.FC<{ title?: string }> = ({ children, title }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  )
}

export default ToolTip
