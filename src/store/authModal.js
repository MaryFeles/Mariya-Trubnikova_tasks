import { makeAutoObservable } from "mobx";

class authModal {

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
      console.log("Clicked cancel button");
      this.setVisible(false);
    };
}

export default new authModal();