import ReactDOM from "react-dom";
import App from "./index";

(window as any).capturRender = (inputConfig: any) => {
  const div =
    document.querySelector("#captur") || document.createElement("div");
  div.id = "captur";

  const render = () => {
    ReactDOM.render(<App {...inputConfig} />, div);
  };

  render();

  document.querySelector("body")?.appendChild(div);
};
