import Feedback from "../src";
import React, { useCallback, useState } from "react";

// import { Modal } from "antd";
// import "antd/dist/antd.css";

const App: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const renderLawCheckTips = useCallback((text) => {
    const changePolicy = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setVisible((value) => !value);
    };

    return <span onClick={changePolicy}>{text}</span>;
  }, []);

  return (
    <>
      12312312312
      <Feedback
        appId="name"
        email="cjfff1996@gmail.com"
        checkbox
        checkboxComponentFunction={renderLawCheckTips}
        uid="cjfff"
        brand="OneShip"
        prefix="http://localhost:3001"
      />
    </>
  );
};

App.displayName = "App";

export default App;
