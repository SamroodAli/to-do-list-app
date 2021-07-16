import { form, textInput, submitButton } from "./formTags.js";
import { div, h2 } from "./tags.js";

const newCategoryForm = () =>
  div([
    h2("New category form"),
    form([
      textInput("Enter category name", "", { name: "name" }),
      submitButton(),
    ]),
  ]);

export default newCategoryForm;
