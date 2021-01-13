/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/explore.js":
/*!***********************************!*\
  !*** ./src/components/explore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"explore\": () => /* binding */ explore\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\nvar explore = function explore() {\n  return \"this is explore page\";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/explore.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Header = function Header() {\n  var listProps = function listProps(link) {\n    return {\n      onclick: function onclick(posts) {\n        window.location.pathname = link;\n        console.log(posts);\n      }\n    };\n  };\n\n  var menuItems = [{\n    link: \"/\",\n    props: {\n      name: \"home\",\n      \"class\": \"icon home-icon fa fa-home\"\n    }\n  }, {\n    link: \"/messenger\",\n    props: {\n      name: \"messenger\",\n      \"class\": \"icon fab fa-facebook-messenger\"\n    }\n  }, {\n    link: \"/explore\",\n    props: {\n      \"class\": \"icon explore-icon fa fa-compass\"\n    }\n  }, {\n    link: \"/notification\",\n    props: {\n      \"class\": \"icon  fa fa-heart\"\n    }\n  }, {\n    link: \"/profile\",\n    props: {\n      \"class\": \"icon profileIcon\"\n    }\n  }];\n  var list = [];\n  menuItems.forEach(function (item) {\n    if (item.link === '/profile') {\n      var _icons = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", _objectSpread(_objectSpread({}, item.props), listProps(item.link)), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n        src: \"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\",\n        \"class\": \"profile-img\"\n      }));\n\n      list.push(_icons);\n      return;\n    }\n\n    var icons = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", _objectSpread(_objectSpread({}, item.props), listProps(item.link)), item.name);\n    list.push(icons);\n  });\n  var img = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n    src: \"https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png\",\n    type: \"search\"\n  });\n  var logoDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"logo-div\"\n  }, img);\n  var inputIcon = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", {\n    \"class\": \"search-icon fa fa-search\"\n  });\n  var inputIconDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"search-icon-div\"\n  }, inputIcon);\n  var input = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", {\n    \"class\": \"nav-input\",\n    placeholder: \"Search\"\n  });\n  var inputDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"input-div\"\n  }, input, inputIconDiv);\n  var listDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"list-div\"\n  }, list);\n  var menus = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\", null, logoDiv, inputDiv, listDiv);\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"header\", null, menus);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\n/* harmony import */ var _react_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react/index */ \"./src/react/index.js\");\n\nvar home = function home() {\n  var sideBar = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"side-bar\"\n  }, \"this is sideBar\");\n  var stories = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"stories\"\n  });\n  var postProfile = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post-profile\"\n  });\n  var heartIcon = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"postheart  fa fa-heart\"\n  });\n  var comenttIcon = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"fa fa-comment\"\n  });\n  var telegramIcon = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"fab fa-telegram-plane\"\n  });\n  var bookmark = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"fa fa-bookmark-o\"\n  });\n  var bookmarkDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"bookmark-div\"\n  }, bookmark);\n  var postName = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', null, \"Here is Name\");\n  var postLikes = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n    \"class\": \"posts-like\"\n  }, \"Liked by\", postName);\n  var postPara = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n    \"class\": \"post-para\"\n  }, \"1 DAY AGO\");\n  var postInput = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    \"class\": \"addComment\",\n    placeholder: \"Add a comment...\"\n  });\n  var postBtn = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n    \"class\": \"input-btn\"\n  }, \"Post\");\n  var btnDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"btn-div\"\n  }, postBtn);\n  var postInputDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"post-input-div\"\n  }, postInput, btnDiv);\n  var postDetails = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post-details\"\n  }, postLikes, postPara);\n  var postIcons = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post-icon\"\n  }, heartIcon, comenttIcon, telegramIcon, bookmarkDiv);\n  var postImg = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n    src: \"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\"\n  });\n  var post = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post\"\n  }, postImg, postIcons, postDetails, postInputDiv);\n  var posts = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"posts\"\n  }, postProfile, post);\n  var main = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"main\"\n  }, stories, posts);\n  var homeDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"home\"\n  }, main, sideBar);\n  return (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"section\", null, homeDiv);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/home.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/components/profile.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _explore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore */ \"./src/components/explore.js\");\n/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ \"./src/components/messenger.js\");\n/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification */ \"./src/components/notification.js\");\n\n\n\n\n\nvar Layout = function Layout() {\n  if (location.pathname === \"/\") {\n    return (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\n  } else if (location.pathname === \"/profile\") {\n    return (0,_profile__WEBPACK_IMPORTED_MODULE_0__.profile)();\n  } else if (location.pathname === \"/explore\") {\n    return (0,_explore__WEBPACK_IMPORTED_MODULE_2__.explore)();\n  } else if (location.pathname === \"/messenger\") {\n    return (0,_messenger__WEBPACK_IMPORTED_MODULE_3__.messenger)();\n  } else if (location.pathname === \"/notification\") {\n    return (0,_notification__WEBPACK_IMPORTED_MODULE_4__.notification)();\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/messenger.js":
/*!*************************************!*\
  !*** ./src/components/messenger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messenger\": () => /* binding */ messenger\n/* harmony export */ });\nvar messenger = function messenger() {\n  return \"this is messenger page\";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/messenger.js?");

/***/ }),

/***/ "./src/components/notification.js":
/*!****************************************!*\
  !*** ./src/components/notification.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notification\": () => /* binding */ notification\n/* harmony export */ });\nvar notification = function notification() {\n  return \" this is notifcation page\";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/notification.js?");

/***/ }),

/***/ "./src/components/profile.js":
/*!***********************************!*\
  !*** ./src/components/profile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"profile\": () => /* binding */ profile\n/* harmony export */ });\nvar profile = function profile() {\n  return \"this is profile page\";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/profile.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nvar App = function App() {\n  var main = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null);\n  var layout = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, (0,_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout)());\n  main.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n  main.appendChild(layout);\n  return main;\n};\n\n_react__WEBPACK_IMPORTED_MODULE_0__.reactDOM.render(App(), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"reactDOM\": () => /* binding */ reactDOM\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar createElement = function createElement(elementType, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  var element = document.createElement(elementType);\n  children.forEach(function (child) {\n    if (_typeof(child) === \"object\") {\n      if (Array.isArray(child)) {\n        child.forEach(function (innerChild) {\n          element.appendChild(innerChild);\n        });\n      } else {\n        element.appendChild(child);\n      }\n    } else {\n      element.innerHTML = children;\n    }\n  });\n  return handleProps(element, props);\n};\n\nvar handleProps = function handleProps(element, props) {\n  if (props) {\n    Object.keys(props).forEach(function (prop) {\n      if (prop) {\n        if (/^on.*$/.test(prop)) {\n          element.addEventListener(prop.substring(2), props[prop]);\n        } else {\n          element.setAttribute(prop, props[prop]);\n        }\n      }\n    });\n  }\n\n  return element;\n};\n\nvar reactDOM = {\n  render: function render(element, rootElement) {\n    rootElement.appendChild(element);\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/react/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;