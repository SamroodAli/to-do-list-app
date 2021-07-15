import { form, textInput, checkBoxInput, textArea, dateInput } from "./tags.js";

const Form = () => {
  return form([
    textInput("Enter title"),
    textArea("Enter description of the todo"),
    dateInput("Enter due date"),
  ]);
};

export default Form;
