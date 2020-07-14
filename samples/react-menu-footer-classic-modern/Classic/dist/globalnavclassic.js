/*! *****@sp-dev-fx-extensions/globalnavclassic - Version: 1.0.0 - Global Nav Classic Bootstrapper***** */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: bootstrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrapper\", function() { return bootstrapper; });\n/* harmony import */ var es6_symbol_implement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-symbol/implement */ \"./node_modules/es6-symbol/implement.js\");\n/* harmony import */ var es6_symbol_implement__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_symbol_implement__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-object-assign/auto */ \"./node_modules/es6-object-assign/auto.js\");\n/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var requirejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! requirejs */ \"requirejs\");\n/* harmony import */ var requirejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(requirejs__WEBPACK_IMPORTED_MODULE_2__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\nvar bootstrapper = /** @class */ (function () {\n    function bootstrapper(global) {\n        this.LOG_SOURCE = 'GlobalNavClassicBootstrapper';\n        this._headerElementId = \"GlobalNavApplicationCustomizerHeader\";\n        this._footerElementId = \"GlobalNavApplicationCustomizerFooter\";\n        this._globalNavUI = global;\n    }\n    bootstrapper.prototype.onInit = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var header, footer, ribbon, workspace, navigationData, headerProps, navLauncher, footerProps, footerLauncher;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        header = document.createElement(\"div\");\n                        header.setAttribute(\"id\", this._headerElementId);\n                        footer = document.createElement(\"div\");\n                        footer.setAttribute(\"id\", this._footerElementId);\n                        ribbon = document.getElementById('s4-ribbonrow');\n                        workspace = document.getElementById('s4-workspace');\n                        if (!workspace) return [3 /*break*/, 2];\n                        ribbon.parentElement.insertBefore(header, ribbon);\n                        workspace.appendChild(footer);\n                        return [4 /*yield*/, this._globalNavUI.HeaderFooterDataService.get()];\n                    case 1:\n                        navigationData = _a.sent();\n                        headerProps = { links: navigationData.headerLinks };\n                        navLauncher = new this._globalNavUI.Launcher({\n                            domElement: header,\n                            reactControl: this._globalNavUI.Header,\n                            controlProps: headerProps\n                        });\n                        navLauncher.launch();\n                        footerProps = { links: navigationData.footerLinks, message: \"Copyright 2020 Contoso Electronics\" };\n                        footerLauncher = new this._globalNavUI.Launcher({\n                            domElement: footer,\n                            reactControl: this._globalNavUI.Footer,\n                            controlProps: footerProps\n                        });\n                        footerLauncher.launch();\n                        return [3 /*break*/, 3];\n                    case 2:\n                        // The element we want to attach to is missing\n                        console.error(this.LOG_SOURCE, new Error(\"Header or Footer element  not available!\"));\n                        _a.label = 3;\n                    case 3: return [2 /*return*/, Promise.resolve()];\n                }\n            });\n        });\n    };\n    return bootstrapper;\n}());\n\n// Set up requireJS to bootstrap external files\nrequirejs__WEBPACK_IMPORTED_MODULE_2__[\"config\"]({\n    paths: {\n        'react': \"https://unpkg.com/react@16.8.5/umd/react.development\",\n        'react-dom': \"https://unpkg.com/react-dom@16.8.5/umd/react-dom.development\",\n        '@sp-dev-fx-extensions/globalnavcommon': \"https://derekcp.sharepoint.com/sites/PnPGlobalNavModern/Style%20Library/reactglobalnavcommon\"\n    }\n});\n// Once the externals are loaded then run the bootstrap code\nrequirejs__WEBPACK_IMPORTED_MODULE_2__(['react', 'react-dom', '@sp-dev-fx-extensions/globalnavcommon'], function (React, ReactDOM, global) {\n    window.ExecuteOrDelayUntilBodyLoaded(function () {\n        if (window.location.search.indexOf('IsDlg=1') < 0) {\n            var b = new bootstrapper(global);\n            b.onInit();\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue         = __webpack_require__(/*! type/value/is */ \"./node_modules/type/value/is.js\")\n  , isPlainFunction = __webpack_require__(/*! type/plain-function/is */ \"./node_modules/type/plain-function/is.js\")\n  , assign          = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , normalizeOpts   = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , contains        = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/#/contains/index.js\");\n\nvar d = (module.exports = function (dscr, value/*, options*/) {\n\tvar c, e, w, options, desc;\n\tif (arguments.length < 2 || typeof dscr !== \"string\") {\n\t\toptions = value;\n\t\tvalue = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[2];\n\t}\n\tif (isValue(dscr)) {\n\t\tc = contains.call(dscr, \"c\");\n\t\te = contains.call(dscr, \"e\");\n\t\tw = contains.call(dscr, \"w\");\n\t} else {\n\t\tc = w = true;\n\t\te = false;\n\t}\n\n\tdesc = { value: value, configurable: c, enumerable: e, writable: w };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n});\n\nd.gs = function (dscr, get, set/*, options*/) {\n\tvar c, e, options, desc;\n\tif (typeof dscr !== \"string\") {\n\t\toptions = set;\n\t\tset = get;\n\t\tget = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[3];\n\t}\n\tif (!isValue(get)) {\n\t\tget = undefined;\n\t} else if (!isPlainFunction(get)) {\n\t\toptions = get;\n\t\tget = set = undefined;\n\t} else if (!isValue(set)) {\n\t\tset = undefined;\n\t} else if (!isPlainFunction(set)) {\n\t\toptions = set;\n\t\tset = undefined;\n\t}\n\tif (isValue(dscr)) {\n\t\tc = contains.call(dscr, \"c\");\n\t\te = contains.call(dscr, \"e\");\n\t} else {\n\t\tc = true;\n\t\te = false;\n\t}\n\n\tdesc = { get: get, set: set, configurable: c, enumerable: e };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/d/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// eslint-disable-next-line no-empty-function\nmodule.exports = function () {};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/noop.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/assign/is-implemented.js\")() ? Object.assign : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/assign/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar assign = Object.assign, obj;\n\tif (typeof assign !== \"function\") return false;\n\tobj = { foo: \"raz\" };\n\tassign(obj, { bar: \"dwa\" }, { trzy: \"trzy\" });\n\treturn obj.foo + obj.bar + obj.trzy === \"razdwatrzy\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keys  = __webpack_require__(/*! ../keys */ \"./node_modules/es5-ext/object/keys/index.js\")\n  , value = __webpack_require__(/*! ../valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , max   = Math.max;\n\nmodule.exports = function (dest, src/*, …srcn*/) {\n\tvar error, i, length = max(arguments.length, 2), assign;\n\tdest = Object(value(dest));\n\tassign = function (key) {\n\t\ttry {\n\t\t\tdest[key] = src[key];\n\t\t} catch (e) {\n\t\t\tif (!error) error = e;\n\t\t}\n\t};\n\tfor (i = 1; i < length; ++i) {\n\t\tsrc = arguments[i];\n\t\tkeys(src).forEach(assign);\n\t}\n\tif (error !== undefined) throw error;\n\treturn dest;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _undefined = __webpack_require__(/*! ../function/noop */ \"./node_modules/es5-ext/function/noop.js\")(); // Support ES3 engines\n\nmodule.exports = function (val) { return val !== _undefined && val !== null; };\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/is-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/keys/is-implemented.js\")() ? Object.keys : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/keys/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\ttry {\n\t\tObject.keys(\"primitive\");\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar keys = Object.keys;\n\nmodule.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar forEach = Array.prototype.forEach, create = Object.create;\n\nvar process = function (src, obj) {\n\tvar key;\n\tfor (key in src) obj[key] = src[key];\n};\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function (opts1/*, …options*/) {\n\tvar result = create(null);\n\tforEach.call(arguments, function (options) {\n\t\tif (!isValue(options)) return;\n\t\tprocess(Object(options), result);\n\t});\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/normalize-options.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) throw new TypeError(\"Cannot use null or undefined\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/valid-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/string/#/contains/is-implemented.js\")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/string/#/contains/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar str = \"razdwatrzy\";\n\nmodule.exports = function () {\n\tif (typeof str.contains !== \"function\") return false;\n\treturn str.contains(\"dwa\") === true && str.contains(\"foo\") === false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar indexOf = String.prototype.indexOf;\n\nmodule.exports = function (searchString/*, position*/) {\n\treturn indexOf.call(this, searchString, arguments[1]) > -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/shim.js?");

/***/ }),

/***/ "./node_modules/es6-object-assign/auto.js":
/*!************************************************!*\
  !*** ./node_modules/es6-object-assign/auto.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./index */ \"./node_modules/es6-object-assign/index.js\").polyfill();\n\n\n//# sourceURL=webpack:///./node_modules/es6-object-assign/auto.js?");

/***/ }),

/***/ "./node_modules/es6-object-assign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es6-object-assign/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Code refactored from Mozilla Developer Network:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign\n */\n\n\n\nfunction assign(target, firstSource) {\n  if (target === undefined || target === null) {\n    throw new TypeError('Cannot convert first argument to object');\n  }\n\n  var to = Object(target);\n  for (var i = 1; i < arguments.length; i++) {\n    var nextSource = arguments[i];\n    if (nextSource === undefined || nextSource === null) {\n      continue;\n    }\n\n    var keysArray = Object.keys(Object(nextSource));\n    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {\n      var nextKey = keysArray[nextIndex];\n      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);\n      if (desc !== undefined && desc.enumerable) {\n        to[nextKey] = nextSource[nextKey];\n      }\n    }\n  }\n  return to;\n}\n\nfunction polyfill() {\n  if (!Object.assign) {\n    Object.defineProperty(Object, 'assign', {\n      enumerable: false,\n      configurable: true,\n      writable: true,\n      value: assign\n    });\n  }\n}\n\nmodule.exports = {\n  assign: assign,\n  polyfill: polyfill\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-object-assign/index.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/implement.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/implement.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (!__webpack_require__(/*! ./is-implemented */ \"./node_modules/es6-symbol/is-implemented.js\")()) {\n\tObject.defineProperty(__webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\"), \"Symbol\", {\n\t\tvalue: __webpack_require__(/*! ./polyfill */ \"./node_modules/es6-symbol/polyfill.js\"),\n\t\tconfigurable: true,\n\t\tenumerable: false,\n\t\twritable: true\n\t});\n}\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/implement.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global     = __webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\")\n  , validTypes = { object: true, symbol: true };\n\nmodule.exports = function () {\n\tvar Symbol = global.Symbol;\n\tvar symbol;\n\tif (typeof Symbol !== \"function\") return false;\n\tsymbol = Symbol(\"test symbol\");\n\ttry { String(symbol); }\n\tcatch (e) { return false; }\n\n\t// Return 'true' also for polyfills\n\tif (!validTypes[typeof Symbol.iterator]) return false;\n\tif (!validTypes[typeof Symbol.toPrimitive]) return false;\n\tif (!validTypes[typeof Symbol.toStringTag]) return false;\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\tif (!value) return false;\n\tif (typeof value === \"symbol\") return true;\n\tif (!value.constructor) return false;\n\tif (value.constructor.name !== \"Symbol\") return false;\n\treturn value[value.constructor.toStringTag] === \"Symbol\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/is-symbol.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/generate-name.js":
/*!**************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/generate-name.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d = __webpack_require__(/*! d */ \"./node_modules/d/index.js\");\n\nvar create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;\n\nvar created = create(null);\nmodule.exports = function (desc) {\n\tvar postfix = 0, name, ie11BugWorkaround;\n\twhile (created[desc + (postfix || \"\")]) ++postfix;\n\tdesc += postfix || \"\";\n\tcreated[desc] = true;\n\tname = \"@@\" + desc;\n\tdefineProperty(\n\t\tobjPrototype,\n\t\tname,\n\t\td.gs(null, function (value) {\n\t\t\t// For IE11 issue see:\n\t\t\t// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/\n\t\t\t//    ie11-broken-getters-on-dom-objects\n\t\t\t// https://github.com/medikoo/es6-symbol/issues/12\n\t\t\tif (ie11BugWorkaround) return;\n\t\t\tie11BugWorkaround = true;\n\t\t\tdefineProperty(this, name, d(value));\n\t\t\tie11BugWorkaround = false;\n\t\t})\n\t);\n\treturn name;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/lib/private/generate-name.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/standard-symbols.js":
/*!***********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/standard-symbols.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d            = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , NativeSymbol = __webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\").Symbol;\n\nmodule.exports = function (SymbolPolyfill) {\n\treturn Object.defineProperties(SymbolPolyfill, {\n\t\t// To ensure proper interoperability with other native functions (e.g. Array.from)\n\t\t// fallback to eventual native implementation of given symbol\n\t\thasInstance: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill(\"hasInstance\")\n\t\t),\n\t\tisConcatSpreadable: d(\n\t\t\t\"\",\n\t\t\t(NativeSymbol && NativeSymbol.isConcatSpreadable) ||\n\t\t\t\tSymbolPolyfill(\"isConcatSpreadable\")\n\t\t),\n\t\titerator: d(\"\", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill(\"iterator\")),\n\t\tmatch: d(\"\", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill(\"match\")),\n\t\treplace: d(\"\", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill(\"replace\")),\n\t\tsearch: d(\"\", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill(\"search\")),\n\t\tspecies: d(\"\", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill(\"species\")),\n\t\tsplit: d(\"\", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill(\"split\")),\n\t\ttoPrimitive: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill(\"toPrimitive\")\n\t\t),\n\t\ttoStringTag: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill(\"toStringTag\")\n\t\t),\n\t\tunscopables: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill(\"unscopables\")\n\t\t)\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/lib/private/setup/standard-symbols.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/symbol-registry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/symbol-registry.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validateSymbol = __webpack_require__(/*! ../../../validate-symbol */ \"./node_modules/es6-symbol/validate-symbol.js\");\n\nvar registry = Object.create(null);\n\nmodule.exports = function (SymbolPolyfill) {\n\treturn Object.defineProperties(SymbolPolyfill, {\n\t\tfor: d(function (key) {\n\t\t\tif (registry[key]) return registry[key];\n\t\t\treturn (registry[key] = SymbolPolyfill(String(key)));\n\t\t}),\n\t\tkeyFor: d(function (symbol) {\n\t\t\tvar key;\n\t\t\tvalidateSymbol(symbol);\n\t\t\tfor (key in registry) {\n\t\t\t\tif (registry[key] === symbol) return key;\n\t\t\t}\n\t\t\treturn undefined;\n\t\t})\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/lib/private/setup/symbol-registry.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// ES2015 Symbol polyfill for environments that do not (or partially) support it\n\n\n\nvar d                    = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validateSymbol       = __webpack_require__(/*! ./validate-symbol */ \"./node_modules/es6-symbol/validate-symbol.js\")\n  , NativeSymbol         = __webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\").Symbol\n  , generateName         = __webpack_require__(/*! ./lib/private/generate-name */ \"./node_modules/es6-symbol/lib/private/generate-name.js\")\n  , setupStandardSymbols = __webpack_require__(/*! ./lib/private/setup/standard-symbols */ \"./node_modules/es6-symbol/lib/private/setup/standard-symbols.js\")\n  , setupSymbolRegistry  = __webpack_require__(/*! ./lib/private/setup/symbol-registry */ \"./node_modules/es6-symbol/lib/private/setup/symbol-registry.js\");\n\nvar create = Object.create\n  , defineProperties = Object.defineProperties\n  , defineProperty = Object.defineProperty;\n\nvar SymbolPolyfill, HiddenSymbol, isNativeSafe;\n\nif (typeof NativeSymbol === \"function\") {\n\ttry {\n\t\tString(NativeSymbol());\n\t\tisNativeSafe = true;\n\t} catch (ignore) {}\n} else {\n\tNativeSymbol = null;\n}\n\n// Internal constructor (not one exposed) for creating Symbol instances.\n// This one is used to ensure that `someSymbol instanceof Symbol` always return false\nHiddenSymbol = function Symbol(description) {\n\tif (this instanceof HiddenSymbol) throw new TypeError(\"Symbol is not a constructor\");\n\treturn SymbolPolyfill(description);\n};\n\n// Exposed `Symbol` constructor\n// (returns instances of HiddenSymbol)\nmodule.exports = SymbolPolyfill = function Symbol(description) {\n\tvar symbol;\n\tif (this instanceof Symbol) throw new TypeError(\"Symbol is not a constructor\");\n\tif (isNativeSafe) return NativeSymbol(description);\n\tsymbol = create(HiddenSymbol.prototype);\n\tdescription = description === undefined ? \"\" : String(description);\n\treturn defineProperties(symbol, {\n\t\t__description__: d(\"\", description),\n\t\t__name__: d(\"\", generateName(description))\n\t});\n};\n\nsetupStandardSymbols(SymbolPolyfill);\nsetupSymbolRegistry(SymbolPolyfill);\n\n// Internal tweaks for real symbol producer\ndefineProperties(HiddenSymbol.prototype, {\n\tconstructor: d(SymbolPolyfill),\n\ttoString: d(\"\", function () { return this.__name__; })\n});\n\n// Proper implementation of methods exposed on Symbol.prototype\n// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype\ndefineProperties(SymbolPolyfill.prototype, {\n\ttoString: d(function () { return \"Symbol (\" + validateSymbol(this).__description__ + \")\"; }),\n\tvalueOf: d(function () { return validateSymbol(this); })\n});\ndefineProperty(\n\tSymbolPolyfill.prototype,\n\tSymbolPolyfill.toPrimitive,\n\td(\"\", function () {\n\t\tvar symbol = validateSymbol(this);\n\t\tif (typeof symbol === \"symbol\") return symbol;\n\t\treturn symbol.toString();\n\t})\n);\ndefineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d(\"c\", \"Symbol\"));\n\n// Proper implementaton of toPrimitive and toStringTag for returned symbol instances\ndefineProperty(\n\tHiddenSymbol.prototype, SymbolPolyfill.toStringTag,\n\td(\"c\", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])\n);\n\n// Note: It's important to define `toPrimitive` as last one, as some implementations\n// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)\n// And that may invoke error in definition flow:\n// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149\ndefineProperty(\n\tHiddenSymbol.prototype, SymbolPolyfill.toPrimitive,\n\td(\"c\", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])\n);\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/polyfill.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isSymbol = __webpack_require__(/*! ./is-symbol */ \"./node_modules/es6-symbol/is-symbol.js\");\n\nmodule.exports = function (value) {\n\tif (!isSymbol(value)) throw new TypeError(value + \" is not a symbol\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/validate-symbol.js?");

/***/ }),

/***/ "./node_modules/ext/global-this/implementation.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/implementation.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var naiveFallback = function () {\n\tif (typeof self === \"object\" && self) return self;\n\tif (typeof window === \"object\" && window) return window;\n\tthrow new Error(\"Unable to resolve global `this`\");\n};\n\nmodule.exports = (function () {\n\tif (this) return this;\n\n\t// Unexpected strict mode (may happen if e.g. bundled into ESM module)\n\n\t// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis\n\t// In all ES5+ engines global object inherits from Object.prototype\n\t// (if you approached one that doesn't please report)\n\ttry {\n\t\tObject.defineProperty(Object.prototype, \"__global__\", {\n\t\t\tget: function () { return this; },\n\t\t\tconfigurable: true\n\t\t});\n\t} catch (error) {\n\t\t// Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)\n\t\treturn naiveFallback();\n\t}\n\ttry {\n\t\t// Safari case (window.__global__ is resolved with global context, but __global__ does not)\n\t\tif (!__global__) return naiveFallback();\n\t\treturn __global__;\n\t} finally {\n\t\tdelete Object.prototype.__global__;\n\t}\n})();\n\n\n//# sourceURL=webpack:///./node_modules/ext/global-this/implementation.js?");

/***/ }),

/***/ "./node_modules/ext/global-this/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ext/global-this/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/ext/global-this/is-implemented.js\")() ? globalThis : __webpack_require__(/*! ./implementation */ \"./node_modules/ext/global-this/implementation.js\");\n\n\n//# sourceURL=webpack:///./node_modules/ext/global-this/index.js?");

/***/ }),

/***/ "./node_modules/ext/global-this/is-implemented.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/is-implemented.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tif (typeof globalThis !== \"object\") return false;\n\tif (!globalThis) return false;\n\treturn globalThis.Array === Array;\n};\n\n\n//# sourceURL=webpack:///./node_modules/ext/global-this/is-implemented.js?");

/***/ }),

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isPrototype = __webpack_require__(/*! ../prototype/is */ \"./node_modules/type/prototype/is.js\");\n\nmodule.exports = function (value) {\n\tif (typeof value !== \"function\") return false;\n\n\tif (!hasOwnProperty.call(value, \"length\")) return false;\n\n\ttry {\n\t\tif (typeof value.length !== \"number\") return false;\n\t\tif (typeof value.call !== \"function\") return false;\n\t\tif (typeof value.apply !== \"function\") return false;\n\t} catch (error) {\n\t\treturn false;\n\t}\n\n\treturn !isPrototype(value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/function/is.js?");

/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../value/is */ \"./node_modules/type/value/is.js\");\n\n// prettier-ignore\nvar possibleTypes = { \"object\": true, \"function\": true, \"undefined\": true /* document.all */ };\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) return false;\n\treturn hasOwnProperty.call(possibleTypes, typeof value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/object/is.js?");

/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isFunction = __webpack_require__(/*! ../function/is */ \"./node_modules/type/function/is.js\");\n\nvar classRe = /^\\s*class[\\s{/}]/, functionToString = Function.prototype.toString;\n\nmodule.exports = function (value) {\n\tif (!isFunction(value)) return false;\n\tif (classRe.test(functionToString.call(value))) return false;\n\treturn true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/plain-function/is.js?");

/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ../object/is */ \"./node_modules/type/object/is.js\");\n\nmodule.exports = function (value) {\n\tif (!isObject(value)) return false;\n\ttry {\n\t\tif (!value.constructor) return false;\n\t\treturn value.constructor.prototype === value;\n\t} catch (error) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/prototype/is.js?");

/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ES3 safe\nvar _undefined = void 0;\n\nmodule.exports = function (value) { return value !== _undefined && value !== null; };\n\n\n//# sourceURL=webpack:///./node_modules/type/value/is.js?");

/***/ }),

/***/ "requirejs":
/*!****************************!*\
  !*** external "requirejs" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = requirejs;\n\n//# sourceURL=webpack:///external_%22requirejs%22?");

/***/ })

/******/ });