import { nanoid } from "nanoid";

class Category {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }
}

export default Category;
