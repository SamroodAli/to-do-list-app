import { form, textInput, submitButton } from "./formTags.js";

const newCategoryForm = () => {
  return form([
    textInput("Enter category name", "", { name: "name" }),
    submitButton(),
  ]);
};

export default newCategoryForm;
