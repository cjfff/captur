import Container from "@/Context";
import { useTranslation } from "@/hooks/useI18n";
import styles from "./index.module.less";

const EntranceIcon = () => {
  const { feedbackVisible, setVisible } = Container.useContainer();
  const { t } = useTranslation();

  return (
    <>
      {feedbackVisible && (
        <>
          <div className={styles.feedback} onClick={() => setVisible(true)}>
            {t("feedback.title")}
          </div>

          <div
            className={styles["feedback-icon"]}
            onClick={() => setVisible(true)}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              data-icon="Bug"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9 7.1V7a3.9 3.9 0 0 0-7.8 0v.1H6.236a1.1 1.1 0 0 1-.984-.608l-.447-.894a.9.9 0 1 0-1.61.805l.447.894a2.9 2.9 0 0 0 2.458 1.6V12.1H3.5a.9.9 0 1 0 0 1.8h2.6V15c0 .74.136 1.448.385 2.1H5a.9.9 0 0 0-.805.498l-1 2a.9.9 0 0 0 1.61.805l.751-1.503h2.017a5.886 5.886 0 0 0 4.427 2 5.886 5.886 0 0 0 4.427-2h2.017l.751 1.503a.9.9 0 1 0 1.61-.805l-1-2A.9.9 0 0 0 19 17.1h-1.485c.249-.652.385-1.36.385-2.1v-1.1h2.6a.9.9 0 1 0 0-1.8h-2.6V8.897a2.9 2.9 0 0 0 2.458-1.6l.447-.894a.9.9 0 1 0-1.61-.805l-.447.894a1.1 1.1 0 0 1-.984.608H15.9Zm-8 7.9V8.9h8.2V15a4.081 4.081 0 0 1-.832 2.477A4.093 4.093 0 0 1 12 19.1a4.094 4.094 0 0 1-3.293-1.656A4.082 4.082 0 0 1 7.9 15Zm2-8v.1h4.2V7a2.1 2.1 0 1 0-4.2 0Zm3 5a.9.9 0 1 0-1.8 0v4.5a.9.9 0 1 0 1.8 0V12Z"
              ></path>
            </svg>
          </div>
        </>
      )}
    </>
  );
};
export default EntranceIcon;
