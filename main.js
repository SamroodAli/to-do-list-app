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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction element(element, innerHtml, className, styles, attributes) {\n  const newElement = document.createElement(element);\n\n  if (Array.isArray(innerHtml)) {\n    newElement.append(...innerHtml);\n  } else if (typeof innerHtml === \"object\") {\n    newElement.appendChild(innerHtml);\n  } else {\n    newElement.innerText = innerHtml.toString();\n  }\n\n  if (className) {\n    newElement.className = className;\n  }\n\n  if (styles) {\n    Object.assign(newElement.style, styles);\n  }\n\n  if (attributes) {\n    Object.entries(attributes).forEach(([key, value]) =>\n      newElement.setAttribute(key, value)\n    );\n  }\n  return newElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);\n\n\n//# sourceURL=webpack://restuarant-page/./src/element.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n\n\nconst Form = () => {\n  return (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.form)((0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(\"input\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n\n//# sourceURL=webpack://restuarant-page/./src/newTodoForm.js?");

/***/ }),

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"div\": () => (/* binding */ div),\n/* harmony export */   \"section\": () => (/* binding */ section),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"h1\": () => (/* binding */ h1),\n/* harmony export */   \"h2\": () => (/* binding */ h2),\n/* harmony export */   \"h3\": () => (/* binding */ h3),\n/* harmony export */   \"h4\": () => (/* binding */ h4),\n/* harmony export */   \"h5\": () => (/* binding */ h5),\n/* harmony export */   \"h6\": () => (/* binding */ h6),\n/* harmony export */   \"p\": () => (/* binding */ p),\n/* harmony export */   \"span\": () => (/* binding */ span),\n/* harmony export */   \"ul\": () => (/* binding */ ul),\n/* harmony export */   \"li\": () => (/* binding */ li),\n/* harmony export */   \"nav\": () => (/* binding */ nav),\n/* harmony export */   \"a\": () => (/* binding */ a),\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"img\": () => (/* binding */ img),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"input\": () => (/* binding */ input)\n/* harmony export */ });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n\n\nconst div = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", ...args);\nconst section = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"section\", ...args);\nconst header = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"header\", ...args);\nconst main = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"main\", ...args);\nconst footer = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"footer\", ...args);\n\nconst h1 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h1\", ...args);\nconst h2 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h2\", ...args);\nconst h3 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h3\", ...args);\nconst h4 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h4\", ...args);\nconst h5 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h5\", ...args);\nconst h6 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"h6\", ...args);\n\nconst p = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"p\", ...args);\nconst span = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", ...args);\nconst ul = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"ul\", ...args);\nconst li = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"li\", ...args);\n\nconst nav = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"nav\", ...args);\nconst a = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"a\", ...args);\n\nconst button = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", ...args);\nconst img = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"img\", ...args);\n\nconst form = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"form\", ...args);\nconst input = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", ...args);\n\n\n//# sourceURL=webpack://restuarant-page/./src/tags.js?");

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