export const render = (parent, child) => {
  parent.innerHTML = "";
  parent.append(child);
  return parent;
};

export const renderOn = (parent) => (child) => render(parent, child);

export const renderOnId = (id) => {
  const parent = document.getElementById(id);
  return renderOn(parent);
};
