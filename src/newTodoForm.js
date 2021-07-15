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
    labelFor("Enter title", "todoTitle"),
    textInput("Enter title", "todoTitle"),
    textArea("Enter description for the to-do"),
    dateInput("Enter due date", "todo-date"),
    numberInput("Enter priority", "todo-priority", "", {}, { min: 0, max: 10 }),
    submitButton(),
  ]);
};

export default newTodoForm;
