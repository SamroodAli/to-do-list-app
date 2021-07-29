import { changePage, eleId } from "./api/render.js";
import form from "./pages/form.js";
import CategoryPage from "./pages/categories.js";
import TodosPage from "./pages/todos.js";
import "./style.scss";

eleId("categories").addEventListener("click", () => {
  changePage(CategoryPage());
});
eleId("todos").addEventListener("click", () => {
  changePage(TodosPage());
});
eleId("newTodo").addEventListener("click", () => changePage(form()));

changePage(CategoryPage());
