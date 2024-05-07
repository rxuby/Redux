import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// import store from "./store/store";
import store from "./store/store.tsx";
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "##272727",
              algorithm: true,
            },
          },
        }}
      >
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
