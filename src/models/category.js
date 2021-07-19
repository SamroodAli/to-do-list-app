import { nanoid } from "nanoid";
class Category {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
    this.id = nanoid();
  }
}

export default Category;
