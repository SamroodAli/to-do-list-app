import { a } from "./tags.js";

export const brand = a(
  "To-do-app",
  "navbar-brand",
  { margin: "1rem 0.5rem" },
  { href: "#" }
);

const navLink = (link) =>
  a(
    link,
    "nav-item nav-link",
    { margin: "0 2rem", color: "black" },
    { href: "#" }
  );

export const categories = navLink("Categories");
export const navLinks = [categories];
