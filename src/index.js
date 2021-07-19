import { renderOnId } from "./api/render.js";
import { h2 } from "./api/tags.js";
import { eleId } from "./api/render.js";
import form from "./pages/form.js";
import CategoryPage from "./pages/categories.js";
import "./style.scss";

const render = renderOnId("content");

function changePage(markup) {
  render(markup);
}

eleId("categories").addEventListener("click", () => changePage(CategoryPage));

eleId("todos").addEventListener("click", () => changePage(h2("todos")));
eleId("newTodo").addEventListener("click", () => changePage(form));
