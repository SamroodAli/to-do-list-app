import ToDo from "../models/todo.js";
import { setCategories } from "../api/storage.js";

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
} from "../api/formTags.js";

export const optionsCreator = (categories) => {
  return categories.map((category, idx) =>
    option(category.name, "", { value: idx })
  );
};

export const selectCreator = (categories) =>
  select(optionsCreator(categories), "", { id: "categoriesSelect" });

const todoForm = (categories = [], todo = {}) =>
  form([
    textInput("Enter title", "", { name: "title", value: todo.title || "" }),
    textArea(todo.description, "", {
      placeholder: "Enter description for the todo",
      required: "",
      name: "description",
      value: todo.description,
    }),
    labelFor("Enter due date", "date"),
    dateInput("Enter due date", "", {
      id: "date",
      name: "date",
      value: todo.date,
    }),
    labelFor("Enter priority", "todo-priority"),
    numberInput("", "", {
      min: 0,
      max: 10,
      id: "priority",
      name: "priority",
      value: todo.priority,
    }),
    labelFor("Choose category", "categoriesSelect"),
    selectCreator(categories),
    submitButton(),
  ]);

function onFormSubmit(form, event, categories) {
  event.preventDefault();
  const [title, description, date, priority, option] = Array.from(
    form.elements
  ).map((ele) => ele.value);

  const chosenCategory = categories[option];
  const newTodo = new ToDo(
    title,
    description,
    date,
    priority,
    chosenCategory.name
  );
  chosenCategory.todos.push(newTodo);
  const newState = categories.map((category) => {
    if (category.id == chosenCategory.id) {
      return chosenCategory;
    } else {
      return category;
    }
  });
  setCategories(newState);
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
