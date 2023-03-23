import { message } from "antd";
import { useCallback, useState } from "react";
import Container from "../Context";
import { createFeedback } from "../services";
import { useTranslation } from "./useI18n";

const camelToSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export function useSubmit() {
  const [loading, setLoading] = useState(false);
  const { form, events, props, reset, type } = Container.useContainer();
  const { t } = useTranslation();
  const submit = useCallback(async () => {
    try {
      setLoading(true);

      const formValue = await form.validateFields();

      const convertExtraParams = () => {
        return Object.entries(props?.extraParams || {}).reduce(
          (acc, [key, value]) => {
            const newKey = camelToSnakeCase(key);
            acc[newKey] = value;
            return acc;
          },
          {} as Record<string, any>
        );
      };

      delete formValue.agree;

      const values = {
        ...formValue,
        uid: props?.uid,
        app_id: props?.appId,
        report_type: type,
        ...convertExtraParams()
      };

      await createFeedback(values);

      message.success(t("feedback.success"));
      reset();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [
    events,
    form,
    props?.appId,
    props?.extraParams,
    props?.uid,
    reset,
    t,
    type
  ]);

  return {
    loading,
    submit
  };
}
