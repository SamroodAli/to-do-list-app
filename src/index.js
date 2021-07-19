import { renderOnId } from "./render.js";
import { h1 } from "./tags.js";

const render = renderOnId("content");
render(h1("Hello world"));
