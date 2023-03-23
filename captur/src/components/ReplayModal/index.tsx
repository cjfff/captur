import React, { useEffect } from 'react'
import { unpack } from 'rrweb'
import Container from '../../Context'
import styles from './index.module.less'

const ReplayModal: React.FC<{ onCancel?: () => void }> = ({ onCancel }) => {
  const { events } = Container.useContainer()

  useEffect(() => {
    const handleReplay = async () => {
      setTimeout(() => {
        new (window as any).rrwebPlayer({
          target: document.querySelector('#rrplayer'),
          props: {
            events,
            unpackFn: unpack,
            showController: true,
          },
        })
      })
    }
    handleReplay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={styles.mask}>
        <span className={styles.closeIcon} onClick={onCancel}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.7)" viewBox="0 0 512 512">
            <g>
              <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249 C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306 C514.019,27.23,514.019,14.135,505.943,6.058z"></path>
            </g>
            <g>
              <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636 c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path>
            </g>
          </svg>
        </span>

        <div className={styles.content}>
          <div id="rrplayer"></div>
        </div>
      </div>
    </>
  )
}

export default ReplayModal
