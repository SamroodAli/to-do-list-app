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

export const newTodoForm = (categories = []) => {
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

export const updateCategories = (categories) => {
  const select = document.getElementById("categoriesSelect");
  select.innerHTML = "";
  select.append(...optionsCreator(categories));
};
