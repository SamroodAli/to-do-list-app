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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: silver;\\n}\\n\\nform * {\\n  display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restuarant-page/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restuarant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restuarant-page/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Category {\n  constructor(name, todos = []) {\n    this.name = name;\n    this.todos = todos;\n  }\n\n  addTodo(todo) {\n    this.todos.push(todo);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n\n\n//# sourceURL=webpack://restuarant-page/./src/category.js?");

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction element(element, innerHtml, className, attributes, styles) {\n  const newElement = document.createElement(element);\n\n  if (Array.isArray(innerHtml)) {\n    newElement.append(...innerHtml);\n  } else if (typeof innerHtml === 'object') {\n    newElement.appendChild(innerHtml);\n  } else if (innerHtml) {\n    newElement.innerText = innerHtml.toString();\n  }\n\n  if (className) {\n    newElement.className = className;\n  }\n\n  if (attributes) {\n    Object.entries(attributes).forEach(([key, value]) => newElement.setAttribute(key, value));\n  }\n\n  if (styles) {\n    Object.assign(newElement.style, styles);\n  }\n\n  return newElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);\n\n\n//# sourceURL=webpack://restuarant-page/./src/element.js?");

/***/ }),

/***/ "./src/formTags.js":
/*!*************************!*\
  !*** ./src/formTags.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"textArea\": () => (/* binding */ textArea),\n/* harmony export */   \"label\": () => (/* binding */ label),\n/* harmony export */   \"select\": () => (/* binding */ select),\n/* harmony export */   \"option\": () => (/* binding */ option),\n/* harmony export */   \"labelFor\": () => (/* binding */ labelFor),\n/* harmony export */   \"textInput\": () => (/* binding */ textInput),\n/* harmony export */   \"checkBoxInput\": () => (/* binding */ checkBoxInput),\n/* harmony export */   \"dateInput\": () => (/* binding */ dateInput),\n/* harmony export */   \"numberInput\": () => (/* binding */ numberInput),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton)\n/* harmony export */ });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n\n\nconst form = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('form', ...args);\nconst input = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('input', ...args);\nconst textArea = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('textArea', ...args);\nconst label = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('label', ...args);\nconst select = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('select', ...args);\nconst option = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('option', ...args);\n\nconst customInput = (type) => (placeholder, className, attributes, styles) => input(\n  undefined,\n  className,\n  {\n    type, placeholder, required: '', ...attributes,\n  },\n  styles,\n);\n\nconst labelFor = (innerHTML, htmlFor, className, styles, attributes) => label(\n  innerHTML,\n  className,\n  { for: htmlFor, ...attributes },\n  styles,\n);\n\nconst textInput = customInput('text');\nconst checkBoxInput = customInput('checkbox');\nconst dateInput = customInput('date');\nconst numberInput = customInput('number');\nconst submitButton = customInput('submit');\n\n\n//# sourceURL=webpack://restuarant-page/./src/formTags.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n/* harmony import */ var _navLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navLink.js */ \"./src/navLink.js\");\n\n\n\nconst hamburgerButton = (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.button)(\n  (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.span)('', 'navbar-toggler-icon'),\n  'navbar-toggler',\n  {},\n  { type: 'button', 'data-toggle': 'collapse', 'data-target': 'navbar' },\n);\n\nconst navLinksContainer = (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.div)(\n  (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.div)(_navLink_js__WEBPACK_IMPORTED_MODULE_1__.navLinks, 'navbar-nav'),\n  'collapse navbar-collapse',\n  {},\n  { id: 'navbar' },\n);\n\nconst navBarItems = [_navLink_js__WEBPACK_IMPORTED_MODULE_1__.brand, navLinksContainer, hamburgerButton];\n\nconst navBar = (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.header)(\n  (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.nav)(navBarItems, 'navbar navbar-expand-lg navbar-light bg-light'),\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n\n//# sourceURL=webpack://restuarant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTodoForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTodoForm.js */ \"./src/newTodoForm.js\");\n/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.js */ \"./src/category.js\");\n/* harmony import */ var _newCategoryForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newCategoryForm.js */ \"./src/newCategoryForm.js\");\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst project = new _category_js__WEBPACK_IMPORTED_MODULE_1__.default(\"default\");\nconst categories = [project];\n\nconst categoryForm = (0,_newCategoryForm_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n\nfunction newCategory(form, event) {\n  event.preventDefault();\n  const [name] = Array.from(form.elements).map((ele) => ele.value);\n  const newCategory = new _category_js__WEBPACK_IMPORTED_MODULE_1__.default(name);\n  categories.push(newCategory);\n  (0,_newTodoForm_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoForm)(categories);\n}\n\ncategoryForm.addEventListener(\"submit\", (event) =>\n  newCategory(categoryForm, event)\n);\n\nfunction render() {\n  content.append(\n    _header_js__WEBPACK_IMPORTED_MODULE_4__.default,\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_3__.div)([(0,_tags_js__WEBPACK_IMPORTED_MODULE_3__.h2)(\"New To-Do Form\"), (0,_newTodoForm_js__WEBPACK_IMPORTED_MODULE_0__.newTodoForm)(categories)]),\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_3__.div)([(0,_tags_js__WEBPACK_IMPORTED_MODULE_3__.h2)(\"New Category Form\"), categoryForm]),\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_3__.div)(\"\", \"\", { id: \"todos\" })\n  );\n}\nrender();\n\n\n//# sourceURL=webpack://restuarant-page/./src/index.js?");

/***/ }),

/***/ "./src/navLink.js":
/*!************************!*\
  !*** ./src/navLink.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"brand\": () => (/* binding */ brand),\n/* harmony export */   \"categories\": () => (/* binding */ categories),\n/* harmony export */   \"navLinks\": () => (/* binding */ navLinks)\n/* harmony export */ });\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n\n\nconst brand = (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.a)(\n  'To-do-app',\n  'navbar-brand',\n  { margin: '1rem 0.5rem' },\n  { href: '#' },\n);\n\nconst navLink = (link) => (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.a)(\n  link,\n  'nav-item nav-link',\n  { margin: '0 2rem', color: 'black' },\n  { href: '#' },\n);\n\nconst categories = navLink('Categories');\nconst navLinks = [categories];\n\n\n//# sourceURL=webpack://restuarant-page/./src/navLink.js?");

/***/ }),

/***/ "./src/newCategoryForm.js":
/*!********************************!*\
  !*** ./src/newCategoryForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formTags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formTags.js */ \"./src/formTags.js\");\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n\n\n\nconst newCategoryForm = () =>\n  (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.form)([\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.textInput)(\"Enter category name\", \"\", { name: \"name\" }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_0__.submitButton)(),\n  ]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newCategoryForm);\n\n\n//# sourceURL=webpack://restuarant-page/./src/newCategoryForm.js?");

/***/ }),

/***/ "./src/newTodoForm.js":
/*!****************************!*\
  !*** ./src/newTodoForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"optionsCreator\": () => (/* binding */ optionsCreator),\n/* harmony export */   \"selectCreator\": () => (/* binding */ selectCreator),\n/* harmony export */   \"newTodoForm\": () => (/* binding */ newTodoForm),\n/* harmony export */   \"updateTodoForm\": () => (/* binding */ updateTodoForm)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n/* harmony import */ var _formTags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formTags.js */ \"./src/formTags.js\");\n\n\n\n\n\n\nconst optionsCreator = (categories) =>\n  categories.map((category, idx) => (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.option)(category.name, \"\", { value: idx }));\n\nconst selectCreator = (categories) =>\n  (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.select)(optionsCreator(categories), \"\", { id: \"categoriesSelect\" });\n\nconst todoForm = (categories = []) =>\n  (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.form)([\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.textInput)(\"Enter title\", \"\", { name: \"title\" }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.textArea)(\"\", \"\", {\n      placeholder: \"Enter description for the todo\",\n      required: \"\",\n      name: \"description\",\n    }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.labelFor)(\"Enter due date\", \"date\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.dateInput)(\"Enter due date\", \"\", { id: \"date\", name: \"date\" }),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.labelFor)(\"Enter priority\", \"todo-priority\"),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.numberInput)(\"\", \"\", {\n      min: 0,\n      max: 10,\n      id: \"priority\",\n      name: \"priority\",\n    }),\n    selectCreator(categories),\n    (0,_formTags_js__WEBPACK_IMPORTED_MODULE_3__.submitButton)(),\n  ]);\n\nfunction onFormSubmit(form, event, categories) {\n  event.preventDefault();\n  const [title, description, date, priority, option] = Array.from(\n    form.elements\n  ).map((ele) => ele.value);\n\n  const category = categories[option];\n  const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.default(title, description, date, priority, category);\n  category.addTodo(newTodo);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.default)(categories);\n}\n\nconst newTodoForm = (categories) => {\n  const form = todoForm(categories);\n  form.addEventListener(\"submit\", (event) =>\n    onFormSubmit(form, event, categories)\n  );\n  return form;\n};\n\nconst updateTodoForm = (categories) => {\n  const select = document.getElementById(\"categoriesSelect\");\n  select.innerHTML = \"\";\n  select.append(...optionsCreator(categories));\n};\n\n\n//# sourceURL=webpack://restuarant-page/./src/newTodoForm.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _todoCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCard.js */ \"./src/todoCard.js\");\n\n\nfunction renderTodos(categories) {\n  const todos = [];\n  categories.forEach((category) => {\n    category.todos.forEach((todo) => {\n      todos.push(todo);\n    });\n  });\n  const todoCards = todos.map((todo) => (0,_todoCard_js__WEBPACK_IMPORTED_MODULE_0__.default)(todo));\n  const todoSection = document.getElementById('todos');\n  todoSection.innerHTML = '';\n\n  todoSection.append(...todoCards);\n  return todoCards;\n}\n\n\n//# sourceURL=webpack://restuarant-page/./src/render.js?");

/***/ }),

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"div\": () => (/* binding */ div),\n/* harmony export */   \"section\": () => (/* binding */ section),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"h1\": () => (/* binding */ h1),\n/* harmony export */   \"h2\": () => (/* binding */ h2),\n/* harmony export */   \"h3\": () => (/* binding */ h3),\n/* harmony export */   \"h4\": () => (/* binding */ h4),\n/* harmony export */   \"h5\": () => (/* binding */ h5),\n/* harmony export */   \"h6\": () => (/* binding */ h6),\n/* harmony export */   \"p\": () => (/* binding */ p),\n/* harmony export */   \"span\": () => (/* binding */ span),\n/* harmony export */   \"ul\": () => (/* binding */ ul),\n/* harmony export */   \"li\": () => (/* binding */ li),\n/* harmony export */   \"nav\": () => (/* binding */ nav),\n/* harmony export */   \"a\": () => (/* binding */ a),\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"img\": () => (/* binding */ img)\n/* harmony export */ });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n\n\nconst div = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', ...args);\nconst section = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('section', ...args);\nconst header = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('header', ...args);\nconst main = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('main', ...args);\nconst footer = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('footer', ...args);\n\nconst h1 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('h1', ...args);\nconst h2 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('h2', ...args);\nconst h3 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('h3', ...args);\nconst h4 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('h4', ...args);\nconst h5 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('h5', ...args);\nconst h6 = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('h6', ...args);\n\nconst p = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('p', ...args);\nconst span = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('span', ...args);\nconst ul = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('ul', ...args);\nconst li = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('li', ...args);\n\nconst nav = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('nav', ...args);\nconst a = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('a', ...args);\n\nconst button = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('button', ...args);\nconst img = (...args) => (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.default)('img', ...args);\n\n\n//# sourceURL=webpack://restuarant-page/./src/tags.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ToDo {\n  constructor(title, description, date, priority, category) {\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priority = priority;\n    this.category = category;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n\n//# sourceURL=webpack://restuarant-page/./src/todo.js?");

/***/ }),

/***/ "./src/todoCard.js":
/*!*************************!*\
  !*** ./src/todoCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.js */ \"./src/tags.js\");\n\n\nconst todoCard = (todo) => (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.div)(\n  [\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.title),\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.description),\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.date),\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.priority),\n    (0,_tags_js__WEBPACK_IMPORTED_MODULE_0__.p)(todo.category.name),\n  ],\n  'card w-50 mx-auto p-5',\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoCard);\n\n\n//# sourceURL=webpack://restuarant-page/./src/todoCard.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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