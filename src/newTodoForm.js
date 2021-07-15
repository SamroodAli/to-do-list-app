import {
  form,
  select,
  labelFor,
  textInput,
  textArea,
  dateInput,
  numberInput,
  submitButton,
} from "./formTags.js";

const newTodoForm = () => {
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
    select(),
    submitButton(),
  ]);
};

export default newTodoForm;
