import { renderOnId } from "./api/render.js";
import { eleId } from "./api/render.js";
import form from "./pages/form.js";
import CategoryPage from "./pages/categories.js";
import TodosPage from "./pages/todos.js";
import { setCategories, getCategories } from "./api/storage.js";
import "./style.scss";

const render = renderOnId("content");

function changePage(markup) {
  render(markup);
}

eleId("categories").addEventListener("click", () => changePage(CategoryPage));
eleId("todos").addEventListener("click", () => changePage(TodosPage()));
eleId("newTodo").addEventListener("click", () => changePage(form));
