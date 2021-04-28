import axios from "axios";
import { TaskService } from './services/Task.service';

class API {
  task;
  request;

  constructor(baseURL) {
    this.request = axios.create({baseURL});

    this.setInterceptors();

    this.task = new TaskService(this.request);
  }

  setInterceptors() {
    this.request.interceptors.response.use(this.clearData)
  }

  async clearData(res) {
    return res.data;
  }
}

const api = new API('http://localhost:3004');

export default api;
