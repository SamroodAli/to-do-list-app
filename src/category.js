class Category {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
}

export default Category;
