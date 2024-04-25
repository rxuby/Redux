
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

import {
  addFormRegister,
  clearFormRegister,
} from "../store/slice/registerSlice";

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
};

function FormRegister() {
  const register_form = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();

  const onFinish: FormProps["onFinish"] = (values) => {
    dispatch(addFormRegister(values));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex  w-full h-screen justify-between border text   bg-gradient-to-r from-indigo-700 to-black">
        <div className="flex w-full justify-center items-center  ">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // onClear={onClear}
            autoComplete="off"
            layout="vertical"
          >
            <h1 className="text-center mb-12 font-bold text-[2rem] text-white">
              Vite + React + Redux
            </h1>
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {/* <div className="flex w-full  "> */}
            <Form.Item>
              <div className="flex items-center justify-between w-[100%] space-x-3 ">
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="bg-gray-600"
                >
                  Register
                </Button>

                <Button
                  size="large"
                  type="primary"
                  onClick={() => dispatch(clearFormRegister())}
                  className="bg-gray-600"
                >
                  Clear
                </Button>
              </div>
            </Form.Item>
            {/* </div> */}
          </Form>
        </div>

        <div className="flex w-2/4 bg-white *:">
          <div className="text-left pl-6 pt-6">
            <h1>ข้อมูลจาก Reducer</h1>
            <h2>user: {register_form.username}</h2>
            <h2>email: {register_form.email}</h2>
            <h2>password: {register_form.password}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormRegister;
