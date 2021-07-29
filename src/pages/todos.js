import todoCard from "../views/todoCard.js";
import { section } from "../api/tags.js";
import { categoryTodos, getCategories } from "../api/storage.js";

const TodosPage = (todos = categoryTodos(), categories = getCategories()) => {
  const todosWithCategoryNames = todos.map((todo) =>
    Object.assign(todo, { category: categories[todo.category].name })
  );
  const todoCards = todosWithCategoryNames.map((todo, idx) =>
    todoCard(todo, idx)
  );
  return section(todoCards);
};

export default TodosPage;
