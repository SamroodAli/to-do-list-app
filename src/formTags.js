import ele from "./element.js";

export const form = (...args) => ele("form", ...args);
export const input = (...args) => ele("input", ...args);
export const textArea = (...args) => ele("textArea", ...args);
export const label = (...args) => ele("label", ...args);

const customInput = (type) => (placeholder, className, attributes, styles) =>
  input(
    undefined,
    className,
    Object.assign({ type, placeholder, required: "" }, attributes),
    styles
  );

export const labelFor = (innerHTML, htmlFor, className, styles, attributes) =>
  label(
    innerHTML,
    className,
    Object.assign({ for: htmlFor }, attributes),
    styles
  );

export const textInput = customInput("email");
export const checkBoxInput = customInput("checkbox");
export const dateInput = customInput("date");
export const numberInput = customInput("number");
export const submitButton = customInput("submit");
