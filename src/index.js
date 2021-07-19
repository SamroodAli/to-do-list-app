import { renderOnId } from "./api/render.js";
import { h2, eleId } from "./api/tags.js";
import form from "./pages/form.js";

const render = renderOnId("content");

function changePage(markup) {
  render(markup);
}

eleId("categories").addEventListener("click", () =>
  changePage(h2("Categories"))
);

eleId("todos").addEventListener("click", () => changePage(h2("todos")));
eleId("newTodo").addEventListener("click", () => changePage(form));
