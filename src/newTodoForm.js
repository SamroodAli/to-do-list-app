import ToDo from "./todo.js";
import todoCard from "./todoCard";

import {
  form,
  select,
  option,
  labelFor,
  textInput,
  textArea,
  dateInput,
  numberInput,
  submitButton,
} from "./formTags.js";

const optionsCreator = (categories) => {
  return categories.map((category, idx) =>
    option(category.name, "", { value: idx })
  );
};

const selectCreator = (categories) => {
  return select(optionsCreator(categories), "", { id: "categoriesSelect" });
};

const todoForm = (categories = []) => {
  return form([
    textInput("Enter title", "", { name: "title" }),
    textArea("", "", {
      placeholder: "Enter description for the todo",
      required: "",
      name: "description",
    }),
    labelFor("Enter due date", "date"),
    dateInput("Enter due date", "", { id: "date", name: "date" }),
    labelFor("Enter priority", "todo-priority"),
    numberInput("", "", { min: 0, max: 10, id: "priority", name: "priority" }),
    selectCreator(categories),
    submitButton(),
  ]);
};

function renderTodos(categories) {
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

function onFormSubmit(form, event, categories) {
  event.preventDefault();
  const [title, description, date, priority, option] = Array.from(
    form.elements
  ).map((ele) => ele.value);

  const category = categories[option];
  const newTodo = new ToDo(title, description, date, priority, category);
  category.addTodo(newTodo);
  renderTodos(categories);
}

export const newTodoForm = (categories) => {
  const form = todoForm(categories);
  form.addEventListener("submit", (event) =>
    onFormSubmit(form, event, categories)
  );
  return form;
};

export const updateTodoForm = (categories) => {
  const select = document.getElementById("categoriesSelect");
  select.innerHTML = "";
  select.append(...optionsCreator(categories));
};
