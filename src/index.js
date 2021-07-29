import { changePage, eleId } from "./api/render.js";
import form from "./pages/form.js";
import CategoryPage from "./pages/categories.js";
import TodosPage from "./pages/todos.js";
import { categoryTodos, categoryValues } from "./api/storage.js";
import "./style.scss";

eleId("categories").addEventListener("click", () => {
  const categories = categoryValues();
  changePage(CategoryPage(categories));
});
eleId("todos").addEventListener("click", () => {
  const todos = categoryTodos();
  console.log(todos);
  changePage(TodosPage(todos));
});
eleId("newTodo").addEventListener("click", () => changePage(form()));

changePage(CategoryPage());
