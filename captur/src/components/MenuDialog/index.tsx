import { Modal } from "antd";
import type { FC } from "react";
import React from "react";
import Container from "../../Context";
import { useTranslation } from "../../hooks";
import styles from "./index.module.less";
import ReportForm from "./ReportForm";

const MenuDialog: FC<React.ComponentProps<typeof Modal>> = ({
  visible,
  onCancel
}) => {
  const { form, props } = Container.useContainer();
  const { t } = useTranslation();

  return (
    <Modal
      centered
      wrapClassName={styles.modal}
      maskClosable={false}
      title={t("feedback.title")}
      visible={visible}
      footer={false}
      onCancel={onCancel}
      width="400"
    >
      <div className={styles.content}>
        <ReportForm form={form} />
      </div>
      {props?.brand && (
        <div className={styles.powerBy}>
          <span>Powered by</span>
          <span>{props?.brand}</span>
        </div>
      )}
    </Modal>
  );
};

export default MenuDialog;
