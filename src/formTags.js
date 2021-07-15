import ele from "./element.js";

export const form = (...args) => ele("form", ...args);
export const input = (...args) => ele("input", ...args);
export const textArea = (...args) => ele("textArea", ...args);
export const label = (...args) => ele("label", ...args);

const customInput =
  (type) => (placeholder, id, className, styles, attributes) =>
    input(
      undefined,
      className,
      Object.assign({ display: "block" }, styles),
      Object.assign({ type, placeholder, id, required: "" }, attributes)
    );

export const labelFor = (innerHTML, htmlFor, className, styles, attributes) =>
  label(innerHTML, className, styles, Object.assign({ htmlFor, attributes }));

export const textInput = customInput("email");
export const checkBoxInput = customInput("checkbox");
export const dateInput = customInput("date");
export const numberInput = customInput("number");
export const submitButton = customInput("submit");
