export const store = (key, value) => {
  if (typeof value == "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const get = (key, parse = false) => {
  if (parse) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return localStorage.getItem(key);
  }
};

export const setCategories = (categories) => {
  store("categories", categories);
};

export const getCategories = () => get("categories");
