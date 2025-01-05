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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: #36413a;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #a39979;\n}\n\nheader {\n  background-color: #38473e;\n  height: 5vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: sticky;\n  top: 0px;\n}\n\nnav {\n  display: flex;\n  width: 80%;\n  justify-content: space-between;\n}\n\nbutton {\n  color: #a39979;\n  border: none;\n  height: 100%;\n  background-color: #38473e;\n  font-size: 2rem;\n  font-family: cursive;\n}\n\ndiv#content {\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n  height: 100%;\n  align-items: center;\n  text-align: center;\n}\n\nimg.home {\n  max-width: 100%;\n}\n\nh1 {\n  font-family: cursive;\n  font-size: 3.5rem;\n}\n\ndiv#wineList {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20%;\n}\n\ndiv.container {\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  gap: 1em;\n}\n\np#wine {\n  font-weight: 600;\n}\n\ndiv#drink {\n  font-size: 0.9rem;\n}\n\np#dish {\n  font-weight: 600;\n}\n\np#detail {\n  font-size: 0.9rem;\n}\n\n#title {\n  font-family: cursive;\n  font-size: 2rem;\n}\n\nh3#title {\n  font-size: 1.5rem;\n}\n\n#contactDiv {\n  display: flex;\n  align-items: center;\n  gap: 2em;\n}\n\n#contactBox {\n  display: grid;\n  grid-template-rows: auto;\n  gap: 10%;\n}\n\n#reservation {\n  font-weight: 600;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genContact: () => (/* binding */ genContact)\n/* harmony export */ });\nconst genContact = () => {\n  const contentDiv = document.querySelector(\"#content\");\n\n  contentDiv.replaceChildren();\n\n  const contactDiv = document.createElement(\"div\");\n  contactDiv.id = 'contactDiv';\n  const displayImg = new Image();\n  displayImg.src =\n    \"https://images.unsplash.com/photo-1526069631228-723c945bea6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDI%3D\";\n  contactDiv.appendChild(displayImg);\n\n  const contactBox = document.createElement(\"div\");\n  contactBox.id = 'contactBox'\n\n  const div1 = document.createElement(\"div\");\n\n  const restoName = document.createElement(\"h1\");\n  restoName.textContent = \"placeholder name\";\n  div1.appendChild(restoName);\n  const streetAddress = document.createElement(\"p\");\n  streetAddress.textContent = \"123 rue yourstreet\";\n  div1.appendChild(streetAddress);\n\n  contactBox.appendChild(div1);\n\n  const contactInfo = document.createElement(\"div\");\n  const reservation = document.createElement(\"p\");\n  reservation.id = \"reservation\";\n  reservation.textContent = \"To book a reservation inquire at:\";\n  contactInfo.appendChild(reservation);\n  const phoneNumber = document.createElement(\"p\");\n  phoneNumber.textContent = \"(123) 456-7890\";\n  contactInfo.appendChild(phoneNumber);\n  const email = document.createElement(\"p\");\n  email.textContent = \"restaurant@email.com\";\n  contactInfo.appendChild(email);\n  contactBox.appendChild(contactInfo);\n  contactDiv.appendChild(contactBox);\n  contentDiv.appendChild(contactDiv);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genHome: () => (/* binding */ genHome)\n/* harmony export */ });\nconst genHome = () => {\n  const contentDiv = document.querySelector(\"#content\");\n\n  contentDiv.replaceChildren();\n\n  const homeDiv = document.createElement(\"div\");\n  const displayImg = new Image();\n  displayImg.src =\n    \"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\";\n  displayImg.className = 'home';  \n  homeDiv.appendChild(displayImg);\n  const restoName = document.createElement(\"h1\");\n  restoName.textContent = \"placeholder name\";\n  homeDiv.appendChild(restoName);\n  const addressInfo = document.createElement(\"div\");\n  const streetAddress = document.createElement(\"p\");\n  streetAddress.textContent = \"123 rue yourstreet\";\n  addressInfo.appendChild(streetAddress);\n  const phoneNumber = document.createElement(\"p\");\n  phoneNumber.textContent = \"(123) 456-7890\";\n  addressInfo.appendChild(phoneNumber);\n  homeDiv.appendChild(addressInfo);\n  contentDiv.appendChild(homeDiv);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst homeBtn = document.querySelector(\"button#home\");\nconst menuBtn = document.querySelector(\"button#menu\");\nconst contactBtn = document.querySelector(\"button#contact\");\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.genHome)();\n\nhomeBtn.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_1__.genHome);\nmenuBtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_2__.genMenu);\ncontactBtn.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_3__.genContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genMenu: () => (/* binding */ genMenu)\n/* harmony export */ });\nconst genMenu = () => {\n  const contentDiv = document.querySelector(\"#content\");\n\n  contentDiv.replaceChildren();\n\n  const menuDiv = document.createElement(\"div\");\n  menuDiv.id = menu;\n  const drinkMenu = document.createElement(\"div\");\n  drinkMenu.id = 'drink';\n  const wineList = document.createElement(\"div\");\n  wineList.id = 'wineList';\n  const wineTitle = document.createElement(\"h2\");\n  wineTitle.id = 'title';\n  wineTitle.textContent = \"Wine List\";\n  drinkMenu.appendChild(wineTitle);\n\n  const redWines = document.createElement(\"div\");\n  const reds = document.createElement(\"h3\");\n  reds.id = 'title';\n  reds.textContent = \"Red\";\n  redWines.appendChild(reds);\n\n  const merlot = document.createElement(\"div\");\n  const merlotName = document.createElement(\"p\");\n  merlotName.id = \"wine\";\n  merlotName.textContent = \"Merlot\";\n  merlot.appendChild(merlotName);\n  const merlotDetail = document.createElement(\"p\");\n  merlotDetail.textContent = \"country, year\";\n  merlotDetail.id = \"detail\";\n  merlot.appendChild(merlotDetail);\n\n  const bordeaux = document.createElement(\"div\");\n  const bordeauxName = document.createElement(\"p\");\n  bordeauxName.id = \"wine\";\n  bordeauxName.textContent = \"Bordeaux\";\n  bordeaux.appendChild(bordeauxName);\n  const bordeauxDetail = document.createElement(\"p\");\n  bordeauxDetail.id = \"detail\";\n  bordeauxDetail.textContent = \"country, year\";\n  bordeaux.appendChild(bordeauxDetail);\n\n  const malbec = document.createElement(\"div\");\n  const malbecName = document.createElement(\"p\");\n  malbecName.id = \"wine\";\n  malbecName.textContent = \"Malbec\";\n  malbec.appendChild(malbecName);\n  const malbecDetail = document.createElement(\"p\");\n  malbecDetail.id = \"detail\";\n  malbecDetail.textContent = \"country, year\";\n  malbec.appendChild(malbecDetail);\n\n  redWines.appendChild(merlot);\n  redWines.appendChild(bordeaux);\n  redWines.appendChild(malbec);\n\n  const whiteWines = document.createElement(\"div\");\n  const whites = document.createElement(\"h3\");\n  whites.id = 'title';\n  whites.textContent = \"White\";\n  whiteWines.appendChild(whites);\n\n  const chardonnay = document.createElement(\"div\");\n  const chardonnayName = document.createElement(\"p\");\n  chardonnayName.id = \"wine\";\n  chardonnayName.textContent = \"Chardonnay\";\n  chardonnay.appendChild(chardonnayName);\n  const chardonnayDetail = document.createElement(\"p\");\n  chardonnayDetail.id = \"detail\";\n  chardonnayDetail.textContent = \"country, year\";\n  chardonnay.appendChild(chardonnayDetail);\n\n  const riesling = document.createElement(\"div\");\n  const rieslingName = document.createElement(\"p\");\n  rieslingName.id = \"wine\";\n  rieslingName.textContent = \"Riesling\";\n  riesling.appendChild(rieslingName);\n  const rieslingDetail = document.createElement(\"p\");\n  rieslingDetail.id = \"detail\";\n  rieslingDetail.textContent = \"country, year\";\n  riesling.appendChild(rieslingDetail);\n\n  const muscato = document.createElement(\"div\");\n  const muscatoName = document.createElement(\"p\");\n  muscatoName.id = \"wine\";\n  muscatoName.textContent = \"Muscato\";\n  muscato.appendChild(muscatoName);\n  const muscatoDetail = document.createElement(\"p\");\n  muscatoDetail.id = \"detail\";\n  muscatoDetail.textContent = \"country, year\";\n  muscato.appendChild(muscatoDetail);\n\n  whiteWines.appendChild(chardonnay);\n  whiteWines.appendChild(riesling);\n  whiteWines.appendChild(muscato);\n\n  wineList.appendChild(redWines);\n  wineList.appendChild(whiteWines);\n  drinkMenu.appendChild(wineList);\n\n  const cocktailMenu = document.createElement(\"div\");\n  const cocktailTitle = document.createElement(\"h2\");\n  cocktailTitle.id = 'title';\n  cocktailTitle.textContent = \"Cocktails\";\n  cocktailMenu.appendChild(cocktailTitle);\n  const cocktails = document.createElement(\"div\");\n  cocktails.className = \"container\";\n\n  const negroni = document.createElement(\"div\");\n  negroni.id = \"drink\";\n  negroni.textContent = \"Negroni\";\n  cocktails.appendChild(negroni);\n\n  const martini = document.createElement(\"div\");\n  martini.id = \"drink\";\n  martini.textContent = \"Martini\";\n  cocktails.appendChild(martini);\n\n  const vesper = document.createElement(\"div\");\n  vesper.id = \"drink\";\n  vesper.textContent = \"Vesper\";\n  cocktails.appendChild(vesper);\n\n  const oldFashion = document.createElement(\"div\");\n  oldFashion.id = \"drink\";\n  oldFashion.textContent = \"Old Fashioned\";\n  cocktails.appendChild(oldFashion);\n\n  const sidecar = document.createElement(\"div\");\n  sidecar.id = \"drink\";\n  sidecar.textContent = \"Sidecar\";\n  cocktails.appendChild(sidecar);\n\n  const daquiri = document.createElement(\"div\");\n  daquiri.id = \"drink\";\n  daquiri.textContent = \"Daquiri\";\n  cocktails.appendChild(daquiri);\n\n  cocktailMenu.appendChild(cocktails);\n  drinkMenu.appendChild(cocktailMenu);\n  menuDiv.appendChild(drinkMenu);\n\n  const foodMenu = document.createElement(\"div\");\n  const foodTitle = document.createElement(\"h2\");\n  foodTitle.id = 'title'\n  foodTitle.textContent = \"Mains\";\n  foodMenu.appendChild(foodTitle);\n\n  const itemOne = document.createElement(\"div\");\n  const itemOneName = document.createElement(\"p\");\n  itemOneName.id = \"dish\";\n  itemOneName.textContent = \"dish one\";\n  itemOne.appendChild(itemOneName);\n  const itemOneDetail = document.createElement(\"p\");\n  itemOneDetail.id = \"detail\";\n  itemOneDetail.textContent =\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus.\";\n  itemOne.appendChild(itemOneDetail);\n\n  const itemTwo = document.createElement(\"div\");\n  const itemTwoName = document.createElement(\"p\");\n  itemTwoName.id = \"dish\";\n  itemTwoName.textContent = \"dish two\";\n  itemTwo.appendChild(itemTwoName);\n  const itemTwoDetail = document.createElement(\"p\");\n  itemTwoDetail.id = \"detail\";\n  itemTwoDetail.textContent =\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus.\";\n  itemTwo.appendChild(itemTwoDetail);\n\n  const itemThree = document.createElement(\"div\");\n  const itemThreeName = document.createElement(\"p\");\n  itemThreeName.id = \"dish\";\n  itemThreeName.textContent = \"dish three\";\n  itemThree.appendChild(itemThreeName);\n  const itemThreeDetail = document.createElement(\"p\");\n  itemThreeDetail.id = \"detail\";\n  itemThreeDetail.textContent =\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus.\";\n  itemThree.appendChild(itemThreeDetail);\n\n  foodMenu.appendChild(itemOne);\n  foodMenu.appendChild(itemTwo);\n  foodMenu.appendChild(itemThree);\n  menuDiv.appendChild(foodMenu);\n  contentDiv.appendChild(menuDiv);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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