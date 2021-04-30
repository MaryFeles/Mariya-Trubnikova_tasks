export class TaskService {
  request;

  constructor(instance) {
    this.request = instance;
  }

  get(id) {
    return this.request.get(`/tasks/${id}`);
  }

  getAll(searchQuery) {
    return this.request
      .get(`/tasks?q=${searchQuery}&_sort=date&_order=DESC`);
  }

  add(task) {
    return this.request.post("/tasks", task);
  }

  remove(id) {
    this.request.delete(`/tasks/${id}`);
  }

  update(task) {
    this.request.put(`/tasks/${task.id}`, task);
  }
}
