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

export const optionsCreator = (categories) => {
  return categories.map((category, idx) =>
    option(category.name, "", { value: idx })
  );
};

const selectCreator = (categories) => {
  select(optionsCreator(categories), "", { id: "categoriesSelect" });
};

const newTodoForm = (categories = []) => {
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

export default newTodoForm;
