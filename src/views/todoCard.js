import { div, p, button } from "../api/tags.js";
import { changePage } from "../index";
import form from "../pages/form";

const onClick = (todos) => {
  changePage(form(todos));
};

const todoCard = (todo) => {
  const ele = div(
    [
      p(todo.title),
      p(todo.description),
      p(todo.date),
      p(todo.priority),
      p(todo.category),
      button("edit todo"),
    ],
    "card mx-auto w-100 m-1"
  );
  ele.addEventListener("click", () => onClick(todo));
  return ele;
};

export default todoCard;
