import todoCard from "./todoCard.js";

export const renderTodos = (categories) => {
  const todos = [];
  categories.forEach((category) => {
    category.todos.forEach((todo) => {
      todos.push(todo);
    });
  });
  const todoCards = todos.map((todo) => todoCard(todo));
  const todoSection = document.getElementById("todos");
  todoSection.innerHTML = "";

  todoSection.append(...todoCards);
  return todoCards;
};

export const render = (parent, child) => {
  parent.innerHTML = "";
  parent.append(child);
  return parent;
};

export const renderOn = (parent) => (child) => render(parent, child);

export const renderOnId = (id) => {
  const parent = document.getElementById(id);
  return renderOn(parent);
};
