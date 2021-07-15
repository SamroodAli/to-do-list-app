import { form, input } from "./tags.js";

const Form = () => {
  return form([input("input", "", {}, { type: "password" })]);
};

export default Form;
