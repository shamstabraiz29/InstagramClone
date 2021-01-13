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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"explore\": () => /* binding */ explore\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\nvar explore = function explore() {\n  return \"this is explore page\";\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/components/explore.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Header = function Header() {\n  var listProps = function listProps(link) {\n    return {\n      onclick: function onclick(posts) {\n        window.location.pathname = link;\n        console.log(posts);\n      }\n    };\n  };\n\n  var menuItems = [{\n    link: \"/\",\n    props: {\n      name: \"home\",\n      \"class\": \"icon home-icon fa fa-home\"\n    }\n  }, {\n    link: \"/messenger\",\n    props: {\n      name: \"messenger\",\n      \"class\": \"icon fab fa-facebook-messenger\"\n    }\n  }, {\n    link: \"/explore\",\n    props: {\n      \"class\": \"icon explore-icon fa fa-compass\"\n    }\n  }, {\n    link: \"/notification\",\n    props: {\n      \"class\": \"icon  fa fa-heart\"\n    }\n  }, {\n    link: \"/profile\",\n    props: {\n      \"class\": \"icon profileIcon\"\n    }\n  }];\n  var list = [];\n  menuItems.forEach(function (item) {\n    if (item.link === '/profile') {\n      var _icons = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", _objectSpread(_objectSpread({}, item.props), listProps(item.link)), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n        src: \"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\",\n        \"class\": \"profile-img\"\n      }));\n\n      list.push(_icons);\n      return;\n    }\n\n    var icons = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", _objectSpread(_objectSpread({}, item.props), listProps(item.link)), item.name);\n    list.push(icons);\n  });\n  var img = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n    src: \"https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png\",\n    type: \"search\"\n  });\n  var logoDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"logo-div\"\n  }, img);\n  var inputIcon = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", {\n    \"class\": \"search-icon fa fa-search\"\n  });\n  var inputIconDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"search-icon-div\"\n  }, inputIcon);\n  var input = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", {\n    \"class\": \"nav-input\",\n    placeholder: \"Search\"\n  });\n  var inputDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"input-div\"\n  }, input, inputIconDiv);\n  var listDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"list-div\"\n  }, list);\n  var menus = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\", null, logoDiv, inputDiv, listDiv);\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"header\", null, menus);\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\n/* harmony import */ var _react_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react/index */ \"./src/react/index.js\");\n\nvar home = function home() {\n  var sideBar = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"side-bar\"\n  }, \"this is sideBar\");\n  var stories = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"stories\"\n  });\n  var postProfile = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post-profile\"\n  });\n  var heartIcon = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"postheart  fa fa-heart\"\n  });\n  var comenttIcon = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"fa fa-comment\"\n  });\n  var telegramIcon = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"fab fa-telegram-plane\"\n  });\n  var bookmark = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": \"fa fa-bookmark-o\"\n  });\n  var bookmarkDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"bookmark-div\"\n  }, bookmark);\n  var postName = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', null, \"Here is Name\");\n  var postLikes = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n    \"class\": \"posts-like\"\n  }, \"Liked by\", postName);\n  var postPara = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n    \"class\": \"post-para\"\n  }, \"1 DAY AGO\");\n  var postInput = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    \"class\": \"addComment\",\n    placeholder: \"Add a comment...\"\n  });\n  var postBtn = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n    \"class\": \"input-btn\"\n  }, \"Post\");\n  var btnDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"btn-div\"\n  }, postBtn);\n  var postInputDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"post-input-div\"\n  }, postInput, btnDiv);\n  var postDetails = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post-details\"\n  }, postLikes, postPara);\n  var postIcons = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post-icon\"\n  }, heartIcon, comenttIcon, telegramIcon, bookmarkDiv);\n  var postImg = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n    src: \"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\"\n  });\n  var post = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"post\"\n  }, postImg, postIcons, postDetails, postInputDiv);\n  var posts = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"posts\"\n  }, postProfile, post);\n  var main = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"main\"\n  }, stories, posts);\n  var homeDiv = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"home\"\n  }, main, sideBar);\n  return (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"section\", null, homeDiv);\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/components/home.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/components/profile.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _explore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore */ \"./src/components/explore.js\");\n/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ \"./src/components/messenger.js\");\n/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification */ \"./src/components/notification.js\");\n\n\n\n\n\nvar Layout = function Layout() {\n  if (location.pathname === \"/\") {\n    return (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\n  } else if (location.pathname === \"/profile\") {\n    return (0,_profile__WEBPACK_IMPORTED_MODULE_0__.profile)();\n  } else if (location.pathname === \"/explore\") {\n    return (0,_explore__WEBPACK_IMPORTED_MODULE_2__.explore)();\n  } else if (location.pathname === \"/messenger\") {\n    return (0,_messenger__WEBPACK_IMPORTED_MODULE_3__.messenger)();\n  } else if (location.pathname === \"/notification\") {\n    return (0,_notification__WEBPACK_IMPORTED_MODULE_4__.notification)();\n  }\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/messenger.js":
/*!*************************************!*\
  !*** ./src/components/messenger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messenger\": () => /* binding */ messenger\n/* harmony export */ });\nvar messenger = function messenger() {\n  return \"this is messenger page\";\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/components/messenger.js?");

/***/ }),

/***/ "./src/components/notification.js":
/*!****************************************!*\
  !*** ./src/components/notification.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notification\": () => /* binding */ notification\n/* harmony export */ });\nvar notification = function notification() {\n  return \" this is notifcation page\";\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/components/notification.js?");

/***/ }),

/***/ "./src/components/profile.js":
/*!***********************************!*\
  !*** ./src/components/profile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"profile\": () => /* binding */ profile\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\nvar profile = function profile() {\n  var profileSection = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"profileContainer\"\n  }, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"profileSection\"\n  }, // profile image section\n  (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'imgContainer'\n  }, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n    \"class\": \"proimg\",\n    src: 'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'\n  })), // discreption Container\n  (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": \"discreptionContainer\"\n  }, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {\n    \"class\": \"username\"\n  }, 'kifayatkifoo136'), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n    \"class\": 'editBtn'\n  }, 'Edit Profile')), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": 'fa fa-cog'\n  })), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {\n    \"class\": 'post'\n  }, '28 Posts'), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {\n    \"class\": 'post'\n  }, '146 followers'), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {\n    \"class\": 'post'\n  }, '146 following')), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', null, 'kifayat kifoo'), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', null, 'meer -e- mehfill'))), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', null), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'links'\n  }, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": 'link fa fa-th'\n  }, ' &nbsp;   POSTS'), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": 'link fa fa-tv'\n  }, ' &nbsp;  IGTV'), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": 'link far fa-bookmark'\n  }, ' &nbsp;   SAVED'), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {\n    \"class\": 'link fa fa-id-badge'\n  }, ' &nbsp;   TAGGED')) // gallery\n  // createElement('div',{class:'galleryContainer'},\n  // createElement('img', {class:'galleryImg',src:'https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oSjcleP4koAAX-y2ymU&tp=1&oh=82e831735b98793b25a787c9559649df&oe=60282D70 '}),\n  // )\n  );\n  var a = [{\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oSjcleP4koAAX-y2ymU&tp=1&oh=82e831735b98793b25a787c9559649df&oe=60282D70\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/118712186_411099289860573_1451770521398276991_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=J23ALa_Op2sAX_jh1T2&tp=1&oh=b3a2666fecbd8fbb60b0b82f0089ac80&oe=602A3E80\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/116907540_754959191923042_6219581054835634309_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t9FBj3AZERYAX9yY43D&tp=1&oh=1f5a43edd262a59f09990ce7f2525076&oe=60285522\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/106031545_1429499090571507_2182398040872607801_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8Erkpur2xlcAX_akiXW&tp=1&oh=4e68514c63b8dd2f097368d413788e2e&oe=6026BF92\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/101492944_110201593913712_5819216545209008507_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HaRKl7lc1t8AX8NDZmL&tp=1&oh=1562f70d2db4b30275b6452ea36c4a02&oe=60294114\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/82480125_900364083712961_2300730102031587495_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Ll7yR3DvqcMAX9q_k1n&tp=1&oh=42db7b8b3d1c7f9679e59f5c26af4e84&oe=6026D801\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/81838215_125055232326974_8594058047270200671_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DM8FS2ryQ60AX8tOccJ&tp=1&oh=8fd91f3c2cbcbbbe8b262a05c5b9caab&oe=6029B61F\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/82346668_474590323432996_4697610113442128447_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=wJ0yCi30y3QAX_q4Vwl&tp=1&oh=9ef9a5bf0a0634b043c69101c8a78c6a&oe=60282BEA\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/125807820_2713747652287193_325291426103969857_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=iTdaD0R-N0EAX_CTY4F&tp=1&oh=0a32174e7c7c5dbc438216fd1c4d29c3&oe=602A2D01\"\n  }, {\n    imgsrc: \"https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/121105787_186872212895394_8461070920078078219_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=i4p6nb4-FIAAX-mGefk&tp=1&oh=a31a9d596d852fe82c314d0444e08eeb&oe=602A3126\"\n  }];\n  var b = [];\n  a.forEach(function (e) {\n    var galleryImage = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n      \"class\": \"galleryImg\",\n      src: e.imgsrc\n    });\n    b.push(galleryImage);\n  });\n  var galleryContainer = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'galleryContainer'\n  }, b); // b.push(galleryContainer);\n  // });\n  // let container = document.createDocumentFragment();\n  // b.forEach((e) => {\n  //     container.appendChild(e);\n  // });\n\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"section\", null, profileSection, galleryContainer);\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/components/profile.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nvar App = function App() {\n  var main = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null);\n  var layout = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, (0,_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout)());\n  main.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n  main.appendChild(layout);\n  return main;\n};\n\n_react__WEBPACK_IMPORTED_MODULE_0__.reactDOM.render(App(), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/index.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"reactDOM\": () => /* binding */ reactDOM\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar createElement = function createElement(elementType, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  var element = document.createElement(elementType);\n  children.forEach(function (child) {\n    if (_typeof(child) === \"object\") {\n      if (Array.isArray(child)) {\n        child.forEach(function (innerChild) {\n          element.appendChild(innerChild);\n        });\n      } else {\n        element.appendChild(child);\n      }\n    } else {\n      element.innerHTML = children;\n    }\n  });\n  return handleProps(element, props);\n};\n\nvar handleProps = function handleProps(element, props) {\n  if (props) {\n    Object.keys(props).forEach(function (prop) {\n      if (prop) {\n        if (/^on.*$/.test(prop)) {\n          element.addEventListener(prop.substring(2), props[prop]);\n        } else {\n          element.setAttribute(prop, props[prop]);\n        }\n      }\n    });\n  }\n\n  return element;\n};\n\nvar reactDOM = {\n  render: function render(element, rootElement) {\n    rootElement.appendChild(element);\n  }\n};\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/react/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://instagram-clone-in-js/./src/style.css?");

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