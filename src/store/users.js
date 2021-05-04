import { makeAutoObservable } from "mobx";
import api from "../dal/api";

class Users {
  state = {
    users: [],
    currentUser: undefined,
    isFetching: false,
    statusLogin: "",
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
    this.setIsFetching(true);
    await api.user
      .login(username, password)
      .then((data) => {
        if (data[0] === undefined) {
          throw new Error("User is not found");
        } else {
          this.setUserToLocalStorage(data[0].id);
          this.setStatusLogin("Done");
          this.setIsFetching(false);
        }
      })
      .catch((e) => {
        this.setStatusLogin("Error");
        console.error(e);
      });
  }

  async getCurrentUser(id) {
    await api.user.get(id).then((data) => {
      this.setCurrentUser(data);
      return data;
    });
  }

  async getUserFromLocalStorage(id) {
    await api.user
      .get(id)
      .then((data) => {
        this.setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCurrentUser() {
    this.state.currentUser = "";
    localStorage.removeItem("userId");
  }

  setCurrentUser(data) {
    this.state.currentUser = data;
  }

  setStatusLogin(value) {
    this.state.statusLogin = value;
  }

  setUserToLocalStorage(userId) {
    this.getCurrentUser(userId);
    localStorage.setItem("userId", userId);
  }

  setUsers(data) {
    this.state.users = data;
  }

  setIsFetching(value) {
    this.state.isFetching = value;
  }
}

export default new Users();
