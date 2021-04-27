import React from "react";
import { Modal, Button } from "antd";
import AddingTaskForm from "./AddingTaskForm";
import addTaskModal from "../store/addTaskModal";
import { observer } from "mobx-react";
import { iconPlusSquare } from "../helpers/icons";

const AddingTaskModal = observer(() => {
  return (
    <>
      <Button className="main__btn" type="primary" onClick={addTaskModal.showModal}>
        {iconPlusSquare}
        <span className="main__btn-text">Add New</span>
      </Button>
      <Modal
        title="Add new task"
        visible={addTaskModal.visible}
        onCancel={addTaskModal.handleCancel}
        footer=""
      >
        <AddingTaskForm />
      </Modal>
    </>
  );
});

export default AddingTaskModal;
