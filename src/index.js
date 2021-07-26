import { changePage, eleId } from "./api/render.js";
import form from "./pages/form.js";
import CategoryPage from "./pages/categories.js";
import TodosPage from "./pages/todos.js";
import { getCategories } from "./api/storage.js";
import "./style.scss";

eleId("categories").addEventListener("click", () => changePage(CategoryPage()));
eleId("todos").addEventListener("click", () => {
  const categories = getCategories();
  const todos = Object.keys(categories).map((id) => categories[id].todos);
  changePage(TodosPage(todos.flat()));
});
eleId("newTodo").addEventListener("click", () => changePage(form()));

changePage(CategoryPage());
