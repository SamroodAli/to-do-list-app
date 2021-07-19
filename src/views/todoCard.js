import { div, p } from "../api/tags.js";

const todoCard = (todo) => {
  const ele = div(
    [
      p(todo.title),
      p(todo.description),
      p(todo.date),
      p(todo.priority),
      p(todo.category),
    ],
    "card mx-auto w-100 m-1"
  );
  ele.addEventListener("click", () => {});
  return ele;
};

export default todoCard;
