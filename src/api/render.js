export const render = (parent, child) => {
  parent.innerHTML = "";
  parent.append(child);
  return parent;
};

export const renderOn = (parent) => (child) => render(parent, child);

export const eleId = (id) => document.getElementById(id);

export const deleteId = (id) => {
  eleId(id).remove();
};

const content = document.getElementById("content");
const contentRender = renderOn(content);
export const changePage = (markup) => {
  contentRender(markup);
};
