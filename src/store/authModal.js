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
      console.log("Clicked cancel button");
      this.setVisible(false);
    };
}

export default new AuthModal();