import ele from './element.js';

export const form = (...args) => ele('form', ...args);
export const input = (...args) => ele('input', ...args);
export const textArea = (...args) => ele('textArea', ...args);
export const label = (...args) => ele('label', ...args);
export const select = (...args) => ele('select', ...args);
export const option = (...args) => ele('option', ...args);

export const customInput = (type) => (placeholder, className, attributes, styles) => input(
  undefined,
  className,
  {
    type,
    placeholder,
    required: '',
    ...attributes,
  },
  styles,
);

export const labelFor = (innerHTML, htmlFor, className, styles, attributes) => {
  const attributesForElement = { for: htmlFor, ...attributes };
  return label(innerHTML, className, attributesForElement, styles);
};

export const textInput = customInput('text');
export const checkBoxInput = customInput('checkbox');
export const dateInput = customInput('date');
export const numberInput = customInput('number');
export const submitButton = customInput('submit');
