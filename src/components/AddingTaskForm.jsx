import React from "react";
import { Button, Form, Input, Select } from "antd";
import modal from "../store/modal";
import todo from "../store/todo";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 14,
    span: 20,
  },
};

const AddingTaskForm = () => {
  const [form] = Form.useForm();

  const handleClick = () => {
    form.resetFields();
    modal.setVisible(false);
  };

  const onFinish = (values) => {
    let newTodo = {
      id: Date.now(),
      title: values.task,
      priority: values.priority,
      completed: false,
      status: "Pending",
    };

    todo.addTodo(newTodo);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="task-form"
      {...layout}
      form={form}
      name="taskForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Task"
        name="task"
        rules={[
          {
            required: true,
            message: "Please input new task!",
          },
        ]}
        value=""
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Priority"
        name="priority"
        rules={[
          {
            required: true,
            message: "Please select priority!",
          },
        ]}
      >
        <Select>
          <Select.Option value="Minor">Minor</Select.Option>
          <Select.Option value="Normal">Normal</Select.Option>
          <Select.Option value="Critical">Critical</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={handleClick}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddingTaskForm;
