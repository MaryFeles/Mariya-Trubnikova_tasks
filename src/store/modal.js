import { makeAutoObservable } from "mobx";

class Modal {
  visible = false;
  confirmLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setVisible = (value) => {
    this.visible = value;
  };

  setConfirmLoading = (value) => {
    this.confirmLoading = value;
  };

  showModal = () => {
    this.setVisible(true);
  };

  handleOk = () => {
    this.setConfirmLoading(true);
    setTimeout(() => {
      this.setVisible(false);
      this.setConfirmLoading(false);
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setVisible(false);
  };
}

export default new Modal();
