import {
  form,
  textInput,
  checkBoxInput,
  textArea,
  dateInput,
  numberInput,
} from "./tags.js";

const newTodoForm = () => {
  return form([
    textInput("Enter title"),
    textArea("Enter description of the todo"),
    dateInput("Enter due date"),
    numberInput("Enter priority", "", {}, { min: 0, max: 10 }),
  ]);
};

export default newTodoForm;
