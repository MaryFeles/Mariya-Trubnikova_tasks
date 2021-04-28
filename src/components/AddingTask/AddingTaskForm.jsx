import React from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import addTaskModal from "../../store/addTaskModal";
import task from "../../store/tasks";
import InfoModal from "./InfoModal";

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
  const [modal, contextHolder] = Modal.useModal();

  const config = {
    title: "Task was successfully created!",
  };

  const handleClick = () => {
    form.resetFields();
    addTaskModal.setVisible(false);
  };

  const onFinish = (values) => {
    task.createNewTask(values.task, values.priority);
    modal.info(config);

    form.resetFields();
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
      <InfoModal contextHolder={contextHolder} />
    </Form>
  );
};

export default AddingTaskForm;
