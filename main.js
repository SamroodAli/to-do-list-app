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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction element(element, innerHtml, className, styles, attributes) {\n  const newElement = document.createElement(element);\n\n  if (Array.isArray(innerHtml)) {\n    newElement.append(...innerHtml);\n  } else if (typeof innerHtml === \"object\") {\n    newElement.appendChild(innerHtml);\n  } else if (innerHtml) {\n    newElement.innerText = innerHtml.toString();\n  }\n\n  if (className) {\n    newElement.className = className;\n  }\n\n  if (styles) {\n    Object.assign(newElement.style, styles);\n  }\n\n  if (attributes) {\n    Object.entries(attributes).forEach(([key, value]) =>\n      newElement.setAttribute(key, value)\n    );\n  }\n  return newElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);\n\n\n//# sourceURL=webpack://restuarant-page/./src/element.js?");

/***/ }),

/***/ "./src/formTags.js":
/*!*************************!*\
  !*** ./src/formTags.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"textArea\": () => (/* binding */ textArea),\n/* harmony export */   \"label\": () => (/* binding */ label),\n/* harmony export */   \"labelFor\": () => (/* binding */ labelFor),\n/* harmony export */   \"textInput\": () => (/* binding */ textInput),\n/* harmony export */   \"checkBoxInput\": () => (/* binding */ checkBoxInput),\n/* harmony export */   \"dateInput\": () => (/* binding */ dateInput),\n/* harmony export */   \"numberInput\": () => (/* binding */ numberInput),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton)\n/* harmony export */ });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n\n\nconst form = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"form\", ...args);\nconst input = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", ...args);\nconst textArea = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"textArea\", ...args);\nconst label = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"label\", ...args);\n\nconst customInput =\n  (type) => (placeholder, id, className, styles, attributes) =>\n    input(\n      undefined,\n      className,\n      Object.assign({ display: \"block\" }, styles),\n      Object.assign({ type, placeholder, id, required: \"\" }, attributes)\n    );\n\nconst labelFor = (innerHTML, htmlFor, className, styles, attributes) =>\n  label(innerHTML, className, styles, Object.assign({ htmlFor, attributes }));\n\nconst textInput = customInput(\"email\");\nconst checkBoxInput = customInput(\"checkbox\");\nconst dateInput = customInput(\"date\");\nconst numberInput = customInput(\"number\");\nconst submitButton = customInput(\"submit\");\n\n\n//# sourceURL=webpack://restuarant-page/./src/formTags.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTodoForm */ \"./src/newTodoForm.js\");\n\nconst content = document.getElementById(\"content\");\n\ncontent.appendChild((0,_newTodoForm__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n\n//# sourceURL=webpack://restuarant-page/./src/index.js?");

/***/ }),

/***/ "./src/newTodoForm.js":
/*!****************************!*\
  !*** ./src/newTodoForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formTags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formTags.js */ \"./src/formTags.js\");\n\n\nconst newTodoForm = () => {\n  return (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.form)([\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.labelFor)(\"Enter title\", \"todoTitle\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.textInput)(\"Enter title\", \"todoTitle\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.textArea)(\"Enter description for the to-do\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.dateInput)(\"Enter due date\", \"todo-date\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.numberInput)(\"Enter priority\", \"todo-priority\", \"\", {}, { min: 0, max: 10 }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.submitButton)(),\n  ]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodoForm);\n\n\n//# sourceURL=webpack://restuarant-page/./src/newTodoForm.js?");

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