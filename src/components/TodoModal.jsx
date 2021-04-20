import React from "react";
import { Modal, Button } from "antd";
import TodoForm from "./TodoForm";
import modal from "../store/modal";
import { observer } from "mobx-react";

const TodoModal = observer(() => {
  return (
    <>
      <Button className="main__btn" type="primary" onClick={modal.showModal}>
        Add New
      </Button>
      <Modal
        title="Add new task"
        visible={modal.visible}
        confirmLoading={modal.confirmLoading}
        onCancel={modal.handleCancel}
        footer=""
      >
        <TodoForm />
      </Modal>
    </>
  );
});

export default TodoModal;
