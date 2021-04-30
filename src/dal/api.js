import axios from "axios";
import { TaskService } from "./services/Task.service";
import UserService from "./services/User.service";

class API {
  task;
  user;
  request;

  constructor(baseURL) {
    this.request = axios.create({ baseURL });

    this.setInterceptors();

    this.task = new TaskService(this.request);
    this.user = new UserService(this.request);
  }

  setInterceptors() {
    this.request.interceptors.response.use(this.clearData);
  }

  async clearData(res) {
    return res.data;
  }
}

const api = new API("http://localhost:3004");

export default api;
