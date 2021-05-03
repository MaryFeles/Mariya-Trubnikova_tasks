import { makeAutoObservable } from "mobx";

class AuthModal {

    visible = false;
  
    constructor() {      
      makeAutoObservable(this);
    }
  
    setVisible = (value) => {
      this.visible = value;
    };
  
    showModal = () => {
      this.setVisible(true);
    };
  
    handleCancel = () => {
      this.setVisible(false);
    };
}

export default new AuthModal();