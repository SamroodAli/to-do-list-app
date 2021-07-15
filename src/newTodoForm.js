import { form, textInput, checkBoxInput } from "./tags.js";

const Form = () => {
  return form([textInput("hello"), checkBoxInput("")]);
};

export default Form;
