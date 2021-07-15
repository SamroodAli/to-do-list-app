import {
  form,
  labelFor,
  textInput,
  textArea,
  dateInput,
  numberInput,
  submitButton,
} from "./formTags.js";

const newTodoForm = () => {
  return form([
    textInput("Enter title"),
    textArea("Enter description for the to-do"),
    labelFor("Enter due date", "todo-date"),
    dateInput("Enter due date", "", { id: "todo-date" }),
    numberInput("Enter priority", "", { min: 0, max: 10 }),
    submitButton(),
  ]);
};

export default newTodoForm;
