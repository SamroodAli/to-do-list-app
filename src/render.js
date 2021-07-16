import todoCard from "./todoCard";

export function renderTodos(categories) {
  const todos = [];
  console.log(categories);
  categories.forEach((category) => {
    category.todos.forEach((todo) => {
      todos.push(todo);
    });
  });
  const todoCards = todos.map((todo) => todoCard(todo));
  const todoSection = document.getElementById("todos");
  console.log(todoSection);
  todoSection.innerHTML = "";

  todoSection.append(...todoCards);
  return todoCards;
}
