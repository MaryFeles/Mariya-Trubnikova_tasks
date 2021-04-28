export class TaskService {
  request;

  constructor(instance) {
    this.request = instance;
  }

  get(id) {
    return this.request.get(`/tasks/${id}`).catch((error) => console.log(error));
  }

  getAll(searchQuery) {
    return this.request
      .get(`/tasks?q=${searchQuery}&_sort=date&_order=DESC`)
      .catch((error) => console.log(error));
  }

  add(task) {
    return this.request.post("/tasks", task).catch((error) => console.log(error));
  }

  remove(id) {
    this.request.delete(`/tasks/${id}`).catch((error) => console.log(error));
  }

  update(task) {
    this.request.put(`/tasks/${task.id}`, task).catch((error) => console.log(error));
  }
}
