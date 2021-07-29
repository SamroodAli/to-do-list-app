import "@testing-library/jest-dom";
import {
  form,
  input,
  textArea,
  label,
  select,
  option,
  customInput,
  labelFor,
  textInput,
  checkBoxInput,
  dateInput,
  numberInput,
  submitButton,
} from "../../src/api/formTags.js";

test("testing form wrapper for dom element", () => {
  const actual = form("Hello world", "className");
  const expected = document.createElement("form");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<form class="className"></form>');
});

test("testing form wrapper for dom element", () => {
  const actual = input("Hello world", "className");
  const expected = document.createElement("input");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<input class="className">');
});

test("testing form wrapper for dom element", () => {
  const actual = textArea("Hello world", "className");
  const expected = document.createElement("textArea");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<textarea class="className"></textarea>');
});

test("testing form wrapper for dom element", () => {
  const actual = label("Hello world", "className");
  const expected = document.createElement("label");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<label class="className"></label>');
});

test("testing form wrapper for dom element", () => {
  const actual = select("Hello world", "className");
  const expected = document.createElement("select");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<select class="className"></select>');
});

test("testing form wrapper for dom element", () => {
  const actual = option("Hello world", "className");
  const expected = document.createElement("option");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<option class="className"></option>');
});

test("customInput function which returns an input element", () => {
  const fn = customInput("text");
  const actual = fn("name", "className", {}, {});
  expect(actual.outerHTML).toEqual(
    '<input class="className" type="text" placeholder="name" required="">'
  );
});

test("labelFor function", () => {
  const actual = labelFor("content", "name", "className", {}, {});
  expect(actual.outerHTML).toBe('<label class="className" for="name"></label>');
});

test("textInput function which returns an input element", () => {
  const actual = textInput("name", "className", {}, {});
  expect(actual.outerHTML).toEqual(
    '<input class="className" type="text" placeholder="name" required="">'
  );
});

test("checkboxInput function which returns an input element", () => {
  const actual = checkBoxInput("name", "className", {}, {});
  expect(actual.outerHTML).toEqual(
    '<input class="className" type="checkbox" placeholder="name" required="">'
  );
});

test("dateInput function which returns an input element", () => {
  const actual = dateInput("name", "className", {}, {});
  expect(actual.outerHTML).toEqual(
    '<input class="className" type="date" placeholder="name" required="">'
  );
});

test("numberInput function which returns an input element", () => {
  const actual = numberInput("name", "className", {}, {});
  expect(actual.outerHTML).toEqual(
    '<input class="className" type="number" placeholder="name" required="">'
  );
});

test("submitButton function which returns an input element", () => {
  const actual = submitButton("name", "className", {}, {});
  expect(actual.outerHTML).toEqual(
    '<input class="className" type="submit" placeholder="name" required="">'
  );
});
