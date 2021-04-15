import { makeAutoObservable } from "mobx";

class Search {
  search = "";

  constructor() {
    makeAutoObservable(this);
  }

  onSearch({ value }) {
    this.search = value;
    console.log(value);
  }
}

export default new Search();
