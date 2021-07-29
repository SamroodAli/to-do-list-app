import todoCard from "../views/todoCard.js";
import { section } from "../api/tags.js";

const TodosPage = (todos = []) => {
  const todoCards = todos.map((todo, idx) => todoCard(todo, idx));
  return section(todoCards);
};

export default TodosPage;
