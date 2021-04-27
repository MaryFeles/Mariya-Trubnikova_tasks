import axios from "axios";
import { TodoService } from './services/Todo.service';

class API {
  todo;
  request;

  constructor(baseURL) {
    this.request = axios.create({baseURL});

    this.setInterceptors();

    this.todo = new TodoService(this.request);
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
