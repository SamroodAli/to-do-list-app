import { form, textInput, submitButton } from "./api/formTags.js";

const newCategoryForm = () =>
  form([
    textInput("Enter category name", "", { name: "name" }),
    submitButton(),
  ]);

export default newCategoryForm;
