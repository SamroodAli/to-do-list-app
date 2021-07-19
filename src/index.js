import { renderOnId } from "./render.js";
import { h2, eleId } from "./tags.js";
import form from "./form.js";

const render = renderOnId("content");

function changePage(markup) {
  render(markup);
}

eleId("categories").addEventListener("click", () =>
  changePage(h2("Categories"))
);

eleId("todos").addEventListener("click", () => changePage(h2("todos")));
eleId("newTodo").addEventListener("click", () => changePage(form));
