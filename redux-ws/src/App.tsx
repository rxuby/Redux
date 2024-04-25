import { Route, RouterProvider, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import router from "@functions/route";
import { Button, ConfigProvider, Space } from "antd";
import { config_theme } from "@components/ConfigTheme";
import Counter from "./components/Counter";
import Register from "./components/FormRegister";


function App() {
  return (
    //  <RouterProvider router={router}/>

    // <ConfigProvider
    //   theme={
    //     config_theme
    //   }
    // >
    //   <Space>
    //     <Button type="primary">Primary</Button>
    //     <Button>Default</Button>
    //   </Space>
    // </ConfigProvider>

    <>
      {/* <Counter /> */}
      <Register />
    </>
  );
}

export default App;
