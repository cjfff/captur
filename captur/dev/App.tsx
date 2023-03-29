import Feedback from "../src";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      12312312312
      <Feedback
        appId="name"
        email="cjfff1996@gmail.com"
        checkbox
        uid="cjfff"
        prefix="http://localhost:3001"
      />
    </>
  );
};

App.displayName = "App";

export default App;
