import { makeAutoObservable} from "mobx";

class AddTaskModal {
  visible = false;
  confirmLoading = true;

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


  handleCancel = () => {
    this.setVisible(false);
  };
}

export default new AddTaskModal();
