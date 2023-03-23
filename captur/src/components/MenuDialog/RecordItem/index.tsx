import ReplayModal from "@/components/ReplayModal";
import Container from "@/Context";
import { useTranslation } from "@/hooks";
import React, { useState, useEffect } from "react";
import RecordButton from "../RecordButton";
import styles from "./index.module.less";
import { showTime } from "./utils";

const RecordItem: React.FC = () => {
  const {
    setVisible,
    events,
    setRecordToolVisible,
    setEvents,
    startRecord,
    startTime,
    visible
  } = Container.useContainer();
  const { t } = useTranslation();
  const [recordVisible, setRecordVisible] = useState(false);

  const handleShowRecordTool = () => {
    setVisible(false);
    setRecordToolVisible(true);
    startRecord();
  };

  const handleReplay = () => {
    setRecordVisible(true);
  };

  useEffect(() => {
    if (!visible) {
      setRecordVisible(false);
    }
  }, [visible]);

  return (
    <>
      <div className={styles.recordItem}>
        {events.length === 0 && (
          <>
            <div className={styles.recordTips}>{t("feedback.record.tips")}</div>
            <RecordButton onClick={handleShowRecordTool}></RecordButton>
          </>
        )}
        {events.length > 0 && (
          <div className={styles.replayItem}>
            <span className={styles.replayItemLeft}>
              <svg
                className={styles.fileIcon}
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                data-icon="FileText"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.008 3.294a2.614 2.614 0 0 1 1.849-.765h6.857a.9.9 0 0 1 .636.263l5.143 5.143a.9.9 0 0 1 .264.637v10.285a2.614 2.614 0 0 1-2.614 2.614H6.857a2.614 2.614 0 0 1-2.614-2.614V5.143c0-.693.275-1.358.765-1.849ZM6.857 4.33a.814.814 0 0 0-.814.814v13.714a.814.814 0 0 0 .814.815h10.286a.814.814 0 0 0 .814-.815V9.472h-4.243a.9.9 0 0 1-.9-.9V4.329H6.857ZM14.614 5.6l2.07 2.07h-2.07v-2.07ZM7.671 9.43a.9.9 0 0 1 .9-.9h1.715a.9.9 0 1 1 0 1.8H8.57a.9.9 0 0 1-.9-.9Zm0 3.428a.9.9 0 0 1 .9-.9h6.857a.9.9 0 0 1 0 1.8H8.571a.9.9 0 0 1-.9-.9Zm0 3.429a.9.9 0 0 1 .9-.9h6.857a.9.9 0 0 1 0 1.8H8.571a.9.9 0 0 1-.9-.9Z"
                ></path>
              </svg>
              {startTime ? <span>{showTime(startTime)}</span> : null}
            </span>
            <span className={styles.replayItemLRight}>
              <svg
                className={styles.playIcon}
                onClick={handleReplay}
                width="1em"
                height="1em"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                data-icon="Play"
              >
                <path
                  d="M13.661 8.155a1 1 0 0 1 0 1.69l-6.627 4.186a1 1 0 0 1-1.534-.845V4.814a1 1 0 0 1 1.534-.845l6.627 4.186Z"
                  stroke-width="1.8"
                ></path>
              </svg>

              <svg
                className={styles.deleteIcon}
                onClick={() => setEvents([])}
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                data-icon="Trash"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.283 4.4a.826.826 0 0 0-.581.238.791.791 0 0 0-.237.562V6h5.07v-.8a.791.791 0 0 0-.237-.562.826.826 0 0 0-.581-.238h-3.434ZM16.334 6v-.8c0-.692-.278-1.355-.77-1.842a2.626 2.626 0 0 0-1.847-.758h-3.434c-.692 0-1.356.272-1.848.758a2.591 2.591 0 0 0-.77 1.842V6H4.273a.9.9 0 1 0 0 1.8h.817v11c0 .693.278 1.355.77 1.842a2.626 2.626 0 0 0 1.847.758h8.586c.691 0 1.356-.272 1.847-.758.492-.487.77-1.15.77-1.842v-11h.817a.9.9 0 1 0 0-1.8h-3.393ZM6.89 7.8v11c0 .21.084.412.236.563a.826.826 0 0 0 .58.237h8.587c.22 0 .428-.086.58-.237a.791.791 0 0 0 .237-.563v-11H6.89Zm3.393 2.45a.9.9 0 0 1 .9.9v5.1a.9.9 0 0 1-1.8 0v-5.1a.9.9 0 0 1 .9-.9Zm3.434 0a.9.9 0 0 1 .9.9v5.1a.9.9 0 1 1-1.8 0v-5.1a.9.9 0 0 1 .9-.9Z"
                ></path>
              </svg>
            </span>
          </div>
        )}
      </div>

      {visible && recordVisible && (
        <ReplayModal onCancel={() => setRecordVisible(false)} />
      )}
    </>
  );
};

export default RecordItem;
