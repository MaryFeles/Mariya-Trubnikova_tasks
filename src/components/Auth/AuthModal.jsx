import React from "react";
import { Modal } from "antd";
import authModal from "../../store/authModal";
import { observer } from "mobx-react";
import CurrentUserAvatar from "../Avatar/Avatar";
import AuthForm from "./AuthForm";

const AuthModal = observer(() => {
  return (
    <>
      <CurrentUserAvatar handleClick={authModal.showModal}/>
      <Modal
        title="Sign in to task manager"
        visible={authModal.visible}
        onCancel={authModal.handleCancel}
        footer=""
      >
      <AuthForm />
      </Modal>
    </>
  );
});

export default AuthModal;
