import { makeAutoObservable } from "mobx";
import api from "../dal/api";

class Users {
  state = {
    users: [],
    authUsers: [],
    isFetching: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getAllUsers() {
    this.setIsFetching(true);
    await api.users.getAll().then((data) => {
      this.setUsers(data);
      this.setIsFetching(false);
    });
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
