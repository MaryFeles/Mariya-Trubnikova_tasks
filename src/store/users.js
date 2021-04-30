import { makeAutoObservable } from "mobx";
import api from "../dal/api";

class Users {
  state = {
    users: [],
    currentUser: '',
    isFetching: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getAllUsers() {
    this.setIsFetching(true);
    await api.user.getAll().then((data) => {
      this.setUsers(data);
      this.setIsFetching(false);
    });
  }

  async login(username, password) {
    await api.user
      .login(username, password)
      .then((data) => {
        if (data[0] === undefined){
          throw new Error('not ok');
        } else this.setUserToLocalStorage(data[0]);
      }).catch((value) => {
        console.log(value)
      });
  }

  async getUserFromLocalStorage(id) {
    await api.user.get(id).then((data) => {
      this.setCurrentUser(data)
    }).catch((err) => {
      console.log(err)
    })
  }

  setCurrentUser(data){
    this.state.currentUser = data;
  }

  setUserToLocalStorage(data){
    this.state.currentUser = data;
    localStorage.setItem('userId', data.id);
  }

  setUsers(data) {
    this.state.users = data;
  }

  //setRole

  setIsFetching(value) {
    this.state.isFetching = value;
  }
}

export default new Users();
