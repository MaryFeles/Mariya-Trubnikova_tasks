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
  statusLogin == "Done" && authModal.setVisible(false);
  !authModal.visible && form.resetFields();

  const onFinish = (values) => {
    users.login(values.username, values.password);
  };

  return (
    <Form {...layout} name="basic" form={form} onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
        required
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
        required
        validateStatus={
          statusLogin
            ? statusLogin === "Done"
              ? "success"
              : "error"
            : undefined
        }
        help={
          statusLogin &&
          (statusLogin === "Done"
            ? "Login successful"
            : "Incorrect login or password!")
        }
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
});

export default AuthForm;
