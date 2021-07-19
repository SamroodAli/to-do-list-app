import { div, p, button } from "../api/tags.js";
import { changePage } from "../index";
import form from "../pages/form";
import { getCategories } from "../api/storage.js";

const onClick = (todo, idx) => {
  changePage(form(todo, idx));
};

const todoCard = (todo, idx) => {
  const ele = div(
    [
      p(todo.title),
      p(todo.description),
      p(todo.date),
      p(todo.priority),
      p(getCategories()[todo.category].name),
      button("edit todo"),
    ],
    "card mx-auto w-100 m-1"
  );
  ele.addEventListener("click", () => onClick(todo, idx));
  return ele;
};

export default todoCard;
