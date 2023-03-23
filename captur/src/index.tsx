import React, { useEffect } from "react";
import EntranceIcon from "./components/EntranceIcon";
import MenuDialog from "./components/MenuDialog/index";
import RecordTool from "./components/RecordTool";
import Container, { I18N_KEY } from "./Context";
import { useLoadPlayer } from "./hooks";
import type { IFeedbackProps } from "./type";

const Feedback: React.FC<IFeedbackProps> = (props) => {
  const { setProps, visible, recordToolVisible, reset } =
    Container.useContainer();

  useLoadPlayer();

  useEffect(() => {
    // lang default to en
    setProps({ lang: "en", ...props });

    (window as any).updateConfig = (newProps: any) => {
      setProps((old) => ({
        ...old,
        ...newProps
      }));
    };
  }, [props, setProps]);

  useEffect(() => {
    localStorage.setItem(I18N_KEY, props?.lang || "en");
  }, [props?.lang]);

  return (
    <>
      <MenuDialog visible={visible} onCancel={reset} />

      {recordToolVisible && <RecordTool />}

      <EntranceIcon />
    </>
  );
};

const Component = (props: IFeedbackProps) => {
  return (
    <Container.Provider>
      <Feedback {...props} />
    </Container.Provider>
  );
};

Component.displayName = "Feedback";
export default Component;
