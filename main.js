/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction element(element, innerHtml, className, attributes, styles) {\n  const newElement = document.createElement(element);\n\n  if (Array.isArray(innerHtml)) {\n    newElement.append(...innerHtml);\n  } else if (typeof innerHtml === \"object\") {\n    newElement.appendChild(innerHtml);\n  } else if (innerHtml) {\n    newElement.innerText = innerHtml.toString();\n  }\n\n  if (className) {\n    newElement.className = className;\n  }\n\n  if (attributes) {\n    Object.entries(attributes).forEach(([key, value]) =>\n      newElement.setAttribute(key, value)\n    );\n  }\n\n  if (styles) {\n    Object.assign(newElement.style, styles);\n  }\n\n  return newElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);\n\n\n//# sourceURL=webpack://restuarant-page/./src/element.js?");

/***/ }),

/***/ "./src/formTags.js":
/*!*************************!*\
  !*** ./src/formTags.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"textArea\": () => (/* binding */ textArea),\n/* harmony export */   \"label\": () => (/* binding */ label),\n/* harmony export */   \"labelFor\": () => (/* binding */ labelFor),\n/* harmony export */   \"textInput\": () => (/* binding */ textInput),\n/* harmony export */   \"checkBoxInput\": () => (/* binding */ checkBoxInput),\n/* harmony export */   \"dateInput\": () => (/* binding */ dateInput),\n/* harmony export */   \"numberInput\": () => (/* binding */ numberInput),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton)\n/* harmony export */ });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n\n\nconst form = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"form\", ...args);\nconst input = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", ...args);\nconst textArea = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"textArea\", ...args);\nconst label = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"label\", ...args);\n\nconst customInput = (type) => (placeholder, className, attributes, styles) =>\n  input(\n    undefined,\n    className,\n    Object.assign({ type, placeholder, required: \"\" }, attributes),\n    styles\n  );\n\nconst labelFor = (innerHTML, htmlFor, className, styles, attributes) =>\n  label(\n    innerHTML,\n    className,\n    Object.assign({ for: htmlFor }, attributes),\n    styles\n  );\n\nconst textInput = customInput(\"text\");\nconst checkBoxInput = customInput(\"checkbox\");\nconst dateInput = customInput(\"date\");\nconst numberInput = customInput(\"number\");\nconst submitButton = customInput(\"submit\");\n\n\n//# sourceURL=webpack://restuarant-page/./src/formTags.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTodoForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTodoForm.js */ \"./src/newTodoForm.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _todoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCard */ \"./src/todoCard.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst form = (0,_newTodoForm_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nfunction submit(form, event) {\n  event.preventDefault();\n  const [title, description, date, priority] = Array.from(form.elements).map(\n    (ele) => ele.value\n  );\n  console.log(title, description, date, priority);\n}\n\nform.addEventListener(\"submit\", (event) => submit(form, event));\n\ncontent.appendChild(form);\n\n\n//# sourceURL=webpack://restuarant-page/./src/index.js?");

/***/ }),

/***/ "./src/newTodoForm.js":
/*!****************************!*\
  !*** ./src/newTodoForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formTags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formTags.js */ \"./src/formTags.js\");\n\n\nconst newTodoForm = () => {\n  return (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.form)([\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.textInput)(\"Enter title\", \"\", { name: \"title\" }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.textArea)(\"\", \"\", {\n      placeholder: \"Enter description for the todo\",\n      required: \"\",\n      name: \"description\",\n    }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.labelFor)(\"Enter due date\", \"date\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.dateInput)(\"Enter due date\", \"\", { id: \"date\", name: \"date\" }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.labelFor)(\"Enter priority\", \"todo-priority\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.numberInput)(\"\", \"\", { min: 0, max: 10, id: \"priority\", name: \"priority\" }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.submitButton)(),\n  ]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodoForm);\n\n\n//# sourceURL=webpack://restuarant-page/./src/newTodoForm.js?");

/***/ }),

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"div\": () => (/* binding */ div),\n/* harmony export */   \"section\": () => (/* binding */ section),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"h1\": () => (/* binding */ h1),\n/* harmony export */   \"h2\": () => (/* binding */ h2),\n/* harmony export */   \"h3\": () => (/* binding */ h3),\n/* harmony export */   \"h4\": () => (/* binding */ h4),\n/* harmony export */   \"h5\": () => (/* binding */ h5),\n/* harmony export */   \"h6\": () => (/* binding */ h6),\n/* harmony export */   \"p\": () => (/* binding */ p),\n/* harmony export */   \"span\": () => (/* binding */ span),\n/* harmony export */   \"ul\": () => (/* binding */ ul),\n/* harmony export */   \"li\": () => (/* binding */ li),\n/* harmony export */   \"nav\": () => (/* binding */ nav),\n/* harmony export */   \"a\": () => (/* binding */ a),\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"img\": () => (/* binding */ img)\n/* harmony export */ });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n\n\nconst div = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", ...args);\nconst section = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"section\", ...args);\nconst header = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"header\", ...args);\nconst main = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"main\", ...args);\nconst footer = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"footer\", ...args);\n\nconst h1 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h1\", ...args);\nconst h2 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h2\", ...args);\nconst h3 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h3\", ...args);\nconst h4 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h4\", ...args);\nconst h5 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h5\", ...args);\nconst h6 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h6\", ...args);\n\nconst p = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"p\", ...args);\nconst span = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", ...args);\nconst ul = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"ul\", ...args);\nconst li = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"li\", ...args);\n\nconst nav = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"nav\", ...args);\nconst a = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"a\", ...args);\n\nconst button = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", ...args);\nconst img = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"img\", ...args);\n\n\n//# sourceURL=webpack://restuarant-page/./src/tags.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ToDo {\n  constructor(title, description, date, priority, category) {\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priority = priority;\n    this.category = category;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n\n//# sourceURL=webpack://restuarant-page/./src/todo.js?");

/***/ }),

/***/ "./src/todoCard.js":
/*!*************************!*\
  !*** ./src/todoCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n\n\nconst todoCard = (todo) =>\n  (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.div)(\n    [\n      (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.title),\n      (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.description),\n      (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.date),\n      (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.priority),\n      (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.category.name),\n    ],\n    \"card w-50 mx-auto p-5\"\n  );\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoCard);\n\n\n//# sourceURL=webpack://restuarant-page/./src/todoCard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;