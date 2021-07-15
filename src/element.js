function element(element, innerHtml, className, styles, attributes) {
  const newElement = document.createElement(element);

  if (Array.isArray(innerHtml)) {
    newElement.append(...innerHtml);
  } else if (typeof innerHtml === 'object') {
    newElement.appendChild(innerHtml);
  } else if (typeof innerHtml === 'string') {
    newElement.innerText = innerHtml;
  }

  if (className) {
    newElement.className = className;
  }

  if (styles) {
    Object.assign(newElement.style, styles);
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => newElement.setAttribute(key, value));
  }
  return newElement;
}

export default element;
