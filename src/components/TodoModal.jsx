import React from "react";
import { Modal, Button } from "antd";
import TodoForm from "./TodoForm";
import modal from "../store/modal";
import { observer } from "mobx-react";
import { iconPlusSquare } from "../helpers/icons";

const TodoModal = observer(() => {
  return (
    <>
      <Button className="main__btn" type="primary" onClick={modal.showModal}>
        {iconPlusSquare}
        <span className="main__btn-text">Add New</span>
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
