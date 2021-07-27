export const store = (key, value) => {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const get = (key) => JSON.parse(localStorage.getItem(key));

export const setCategories = (categories) => {
  store("categories", categories);
};

export const getCategories = () => get("categories");
export const clear = () => localStorage.clear();

export const categoryTodos = () => Object.values(getCategories());
