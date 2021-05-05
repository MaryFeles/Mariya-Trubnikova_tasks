import React from "react";
import { Modal, Button } from "antd";
import AddingTaskForm from "./AddingTaskForm";
import addTaskModal from "../../store/addTaskModal";
import { observer } from "mobx-react";
import { iconPlusSquare } from "../../helpers/icons";
import users from "../../store/users";
import authModal from "../../store/authModal";

const AddingTaskModal = observer(() => {
  const handleClick = () => {
    users.state.currentUser ? addTaskModal.showModal() : authModal.showModal();
  };
  return (
    <>
      <Button className="main__btn" type="primary" onClick={handleClick}>
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
