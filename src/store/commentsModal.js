import { makeAutoObservable } from "mobx";

class CommentsModal {
visible = false;
//close = false;

  constructor() {
    console.log('Создание модалки');
    makeAutoObservable(this);
  }

  setVisible = (value) => {
    this.visible = value;
  };

  showModal = () => {
    this.setVisible(true);
  };

  handleCancel = (e, history, modalNumber) => {
    e.preventDefault();
    this.setVisible(false);
    history.push("/");
//this.removeModal(modalNumber)
  };

  removeModal(modalNumber){
     //let modal = document.querySelector(`.modal-${modalNumber}`);
      //modal.parentNode.parentNode.remove();
  }

  setCurrentTask(task) {
    this.currentTask = task;
  }
}

export default new CommentsModal();
