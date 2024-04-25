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
      <div className="flex  w-full h-screen justify-between border text   bg-gradient-to-t to-gray-800 from-black">
        <div className="flex w-full justify-center items-center  ">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            style={{}}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // onClear={onClear}
            autoComplete="off"
            layout="vertical"
          >
            <h1 className=" text-center mb-12 font-bold text-[2rem] text-white">
              Vite + React + Redux
            </h1>
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={{ padding: 7 }} />
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
              <Input style={{ padding: 7 }} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password style={{ padding: 7 }} />
            </Form.Item>
            {/* <div className="flex w-full  "> */}
            <Form.Item>
              <div className="flex items-center justify-between  space-x-3 mt-5  ">
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="bg-gray-700/70 w-[50%] shadow-md "
                >
                  Register
                </Button>

                <Button
                  size="large"
                  type="primary"
                  onClick={() => dispatch(clearFormRegister())}
                  className="bg-gray-700/70 w-[50%] shadow-lg"
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
            <h1 className="text-[30px]">ข้อมูลจาก Reducer</h1>
            <h2 className="text-[20px]">user: {register_form.username}</h2>
            <h2 className="text-[20px]">email: {register_form.email}</h2>
            <h2 className="text-[20px]">password: {register_form.password}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormRegister;
