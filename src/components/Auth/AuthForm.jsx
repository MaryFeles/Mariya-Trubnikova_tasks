import React from "react";
import { Form, Input, Button } from "antd";
import users from "../../store/users";
import authModal from "../../store/authModal";
import { observer } from "mobx-react";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AuthForm = observer(() => {
  const [form] = Form.useForm();
  const statusLogin = users.state.statusLogin;

  const onFinish = (values) => {
    users.login(values.username, values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      {statusLogin === "Error" && <span>ERROR</span>}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
});

export default AuthForm;
