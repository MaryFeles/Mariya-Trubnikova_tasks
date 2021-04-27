export class TodoService {
  request;

  constructor(instance) {
    this.request = instance;
  }

  get(id) {
    return this.request.get(`/tasks/${id}`).catch((error) => error);
  }

  getAll(searchQuery) {
    return this.request
      .get(`/tasks?q=${searchQuery}&_sort=date&_order=DESC`)
      .catch((error) => error);
  }

  add(task) {
    return this.request.post("/tasks", task).catch((error) => error);
  }

  remove(id) {
    this.request.delete(`/tasks/${id}`).catch((error) => error);
  }

  update(task) {
    this.request.put(`/tasks/${task.id}`, task).catch((error) => error);
  }
}
