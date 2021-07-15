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
    textArea("", "", {
      placeholder: "Enter description for the todo",
      required: "",
    }),
    labelFor("Enter due date", "date"),
    dateInput("Enter due date", "", { id: "date" }),
    labelFor("Enter priority", "todo-priority"),
    numberInput("", "", { min: 0, max: 10, id: "priority" }),
    submitButton(),
  ]);
};

export default newTodoForm;
