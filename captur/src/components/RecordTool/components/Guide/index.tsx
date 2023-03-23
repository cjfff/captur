import Container from '@/Context'
import { useStore, useTranslation } from '@/hooks'
import classNames from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.less'

const Guide: React.FC<{
  onClose?: () => void
}> = ({ onClose }) => {
  const [animation, setAnimation] = useState<string>(styles.guideAnimation)
  const handleAnimationEnd = () => {
    setAnimation('')
    setTimeout(() => {
      setAnimation(styles.guideAnimation)
    }, 3000)
  }
  const { t } = useTranslation()

  return (
    <div className={classNames(styles['guide-wrap'], animation)} onAnimationEnd={handleAnimationEnd}>
      {t('feedback.tips')}
      <div>
        <button className={styles.button} onClick={onClose}>
          {t('feedback.iknow')}
        </button>
      </div>
    </div>
  )
}

export function useCloseFristGuide() {
  const { recordToolVisible } = Container.useContainer()
  const [showGuide, setShowGuide] = useState<boolean>(false)
  const { store } = useStore()

  const shutdownGuidTips = useCallback(() => {
    setShowGuide(false)
    store.set({
      showGuide: 1,
    })
  }, [store])

  useEffect(() => {
    if (!recordToolVisible) return

    if (!store.get()?.showGuide) {
      setShowGuide(true)
    }
  }, [recordToolVisible, store])

  return {
    shutdownGuidTips,
    showGuide,
  }
}

export default Guide
