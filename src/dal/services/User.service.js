export default class UserService {
  request;

  constructor(instance) {
    this.request = instance;
  }

  get(id) {
    return this.request.get(`/users/${id}`);
  }

  getAll() {
    return this.request.get("/users");
  }

  getMultiple(array) {
    let indexes = "/users?";

    array.forEach((element) => {
      indexes += `id=${element}&`;
    });
    return this.request.get(indexes);
  }

  login(login, password) {
    return this.request.get(`/security?login=${login}&password=${password}`);
  }
}
