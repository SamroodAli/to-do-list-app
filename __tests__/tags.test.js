import "@testing-library/jest-dom";
import {
  div,
  section,
  header,
  main,
  footer,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  ul,
  li,
  nav,
  a,
  button,
  img,
} from "../src/api/tags.js";

test("testing div wrapper for dom element", () => {
  const actual = div("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<div class="className"></div>');
});

test("testing div wrapper for dom element", () => {
  const actual = div("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<div class="className"></div>');
});

test("testing section wrapper for dom element", () => {
  const actual = section("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<section class="className"></section>');
});

test("testing header wrapper for dom element", () => {
  const actual = header("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<header class="className"></header>');
});

test("testing main wrapper for dom element", () => {
  const actual = main("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<main class="className"></main>');
});

test("testing footer wrapper for dom element", () => {
  const actual = footer("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<footer class="className"></footer>');
});

test("testing h1 wrapper for dom element", () => {
  const actual = h1("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<h1 class="className"></h1>');
});

test("testing h2 wrapper for dom element", () => {
  const actual = h2("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<h2 class="className"></h2>');
});

test("testing h3 wrapper for dom element", () => {
  const actual = h3("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<h3 class="className"></h3>');
});

test("testing h4 wrapper for dom element", () => {
  const actual = h4("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<h4 class="className"></h4>');
});

test("testing h5 wrapper for dom element", () => {
  const actual = h5("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<h5 class="className"></h5>');
});

test("testing h6 wrapper for dom element", () => {
  const actual = h6("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<h6 class="className"></h6>');
});

test("testing p wrapper for dom element", () => {
  const actual = p("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<p class="className"></p>');
});

test("testing span wrapper for dom element", () => {
  const actual = span("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<span class="className"></span>');
});

test("testing ul wrapper for dom element", () => {
  const actual = ul("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<ul class="className"></ul>');
});

test("testing nav wrapper for dom element", () => {
  const actual = nav("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<nav class="className"></nav>');
});

test("testing li wrapper for dom element", () => {
  const actual = li("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<li class="className"></li>');
});

test("testing a wrapper for dom element", () => {
  const actual = a("Hello world", "className", { href: "#" });
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<a class="className" href="#"></a>');
});

test("testing a button for dom element", () => {
  const actual = button("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<button class="className"></button>');
});

test("testing img button for dom element", () => {
  const actual = img("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<img class="className">');
});
