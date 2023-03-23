import Container from '@/Context'
import React, { useCallback, useEffect } from 'react'
import BtnClose from './components/BtnClose'
import BtnRecord from './components/BtnRecord'
import BtnStop from './components/BtnStop'
import Guide, { useCloseFristGuide } from './components/Guide'
import Mask from './components/Mask'
import styles from './index.module.less'

const ESC_CODE = 27

const RecordTool: React.FC = () => {
  const { stopFnRef, cancelFnRef, startFlag, startRecord, setVisible, setRecordToolVisible } = Container.useContainer()

  const { showGuide, shutdownGuidTips } = useCloseFristGuide()
  const close = useCallback(() => {
    cancelFnRef.current?.()
  }, [cancelFnRef])

  useEffect(() => {
    const listenEsc = (event) => {
      if (event.keyCode === ESC_CODE) {
        close()
        shutdownGuidTips()
      }
    }
    window.addEventListener('keydown', listenEsc)

    return () => {
      window.removeEventListener('keydown', listenEsc)
    }
  }, [setVisible, setRecordToolVisible, close, shutdownGuidTips])

  const handleClickOperation = useCallback(
    (e) => {
      e.persist()
      if (e?.target?.nodeName === 'IMG') {
        shutdownGuidTips()
      }
    },
    [shutdownGuidTips]
  )

  return (
    <>
      {!startFlag && <Mask />}

      <div className={`${styles['tool-wrap']}`} onClick={handleClickOperation}>
        {showGuide ? <Guide onClose={shutdownGuidTips} /> : null}

        {startFlag ? <BtnStop onClick={stopFnRef.current} /> : <BtnRecord onClick={startRecord} />}

        <BtnClose onClick={close} />
      </div>
    </>
  )
}

export default RecordTool
