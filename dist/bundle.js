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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nbody {\\n  background-color: #141414;\\n  font-family: 'Open Sans', sans-serif;\\n  color: #fff; }\\n\\n.container {\\n  width: 100%;\\n  padding: 0 3%;\\n  margin: auto; }\\n\\nheader {\\n  padding: 15px 0;\\n  background-color: #141414;\\n  position: sticky;\\n  top: .1px;\\n  z-index: 100; }\\n  header .container {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n    header .container nav a {\\n      color: #AAA;\\n      text-decoration: none;\\n      margin-right: 20px;\\n      cursor: pointer; }\\n      header .container nav a:hover, header .container nav a.active {\\n        color: #fff; }\\n    header .container .login {\\n      font-size: 1.5rem;\\n      cursor: pointer; }\\n      header .container .login a {\\n        color: #AAA;\\n        text-decoration: none;\\n        margin-right: 20px; }\\n        header .container .login a:hover {\\n          color: #fff; }\\n        header .container .login a i {\\n          padding-left: 1rem; }\\n\\n.main-movie,\\n.selected-movie {\\n  font-size: 16px;\\n  min-height: 40.62em;\\n  color: #fff;\\n  display: flex;\\n  align-items: end;\\n  background-position: center center;\\n  background-size: cover; }\\n  .main-movie .container,\\n  .selected-movie .container {\\n    margin: 0 auto;\\n    margin-bottom: 2em; }\\n    .main-movie .container .title,\\n    .selected-movie .container .title {\\n      font-weight: 600;\\n      font-size: 3.12em;\\n      margin: 0.4em 0; }\\n    .main-movie .container .description,\\n    .selected-movie .container .description {\\n      font-weight: normal;\\n      font-size: 1em;\\n      line-height: 1.75em;\\n      max-width: 40%;\\n      margin-bottom: 1.25em; }\\n    .main-movie .container .button,\\n    .selected-movie .container .button {\\n      background: rgba(0, 0, 0, 0.5);\\n      border: none;\\n      border-radius: 0.31em;\\n      padding: 0.93em 1.87em;\\n      color: #fff;\\n      margin-right: 1.25em;\\n      cursor: pointer;\\n      transition: .3s ease all;\\n      font-size: 1.25em; }\\n      .main-movie .container .button:hover,\\n      .selected-movie .container .button:hover {\\n        background: #fff;\\n        color: #141414; }\\n\\n.selected-movie .container .buttons {\\n  display: flex;\\n  justify-content: space-between; }\\n\\nmain h3 {\\n  color: #fff;\\n  font-weight: bolder;\\n  font-size: 2rem;\\n  padding-bottom: 1.5rem; }\\n\\nmain .info {\\n  padding: 30px 0 0;\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  font-size: 1rem; }\\n  main .info .data-sheet {\\n    width: 35%; }\\n    main .info .data-sheet .data-title {\\n      font-weight: bold; }\\n    main .info .data-sheet .data-description {\\n      color: #AAA;\\n      padding: .5rem 0; }\\n  main .info .synopsis {\\n    width: 60%; }\\n\\nmain .cast {\\n  padding: 30px 0 0; }\\n  main .cast .cards {\\n    padding: 0 0 30px;\\n    display: grid;\\n    grid-template-columns: repeat(6, 15%);\\n    grid-gap: 0 2%; }\\n    main .cast .cards .card {\\n      align-content: center;\\n      width: 100%;\\n      border-radius: 2rem; }\\n      main .cast .cards .card img {\\n        width: 100%;\\n        height: 55%;\\n        gap: 5px;\\n        transition: 0.3s;\\n        border-radius: 2rem;\\n        object-fit: cover; }\\n        main .cast .cards .card img:hover {\\n          box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2); }\\n      main .cast .cards .card .card-container {\\n        padding: 2px 16px;\\n        text-align: center; }\\n        main .cast .cards .card .card-container .actor {\\n          font-weight: 600;\\n          padding: .5rem; }\\n        main .cast .cards .card .card-container .character {\\n          color: #AAA; }\\n\\n.row .header {\\n  padding: 0 3%;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0.5rem calc($img-gap * 2 + $handle-size);\\n  align-items: center; }\\n  .row .header .title {\\n    font-size: 2rem;\\n    margin: 0;\\n    padding: 0;\\n    padding: .5rem 0; }\\n  .row .header .progress-bar {\\n    visibility: hidden;\\n    display: flex;\\n    gap: .5rem; }\\n    .row .header .progress-bar .progress-item {\\n      flex: 0 0 1.5rem;\\n      min-width: 1.5rem;\\n      height: .5rem;\\n      background-color: rgba(255, 255, 255, 0.5); }\\n      .row .header .progress-bar .progress-item.active {\\n        background-color: #fff; }\\n\\n.row .carousel {\\n  display: flex;\\n  justify-content: center;\\n  overflow: hidden; }\\n  .row .carousel:hover .handle {\\n    visibility: visible; }\\n  .row .carousel:hover > .progress-bar {\\n    visibility: visible; }\\n  .row .carousel .slider {\\n    --items-per-screen: 5;\\n    --slider-index: 0;\\n    display: flex;\\n    flex-grow: 1;\\n    margin: 0 0.25rem;\\n    transform: translateX(calc(var(--slider-index) * -100%));\\n    transition: transform 250ms ease-in-out; }\\n    .row .carousel .slider > img {\\n      max-width: 20%;\\n      flex: 0 0 calc(100 / var(--items-per-screen));\\n      width: calc(100 / var(--items-per-screen));\\n      aspect-ratio: 16/9;\\n      padding: 0.25rem;\\n      border-radius: .1rem;\\n      cursor: pointer;\\n      transition: .3s ease all;\\n      z-index: 10; }\\n      .row .carousel .slider > img:hover {\\n        position: relative;\\n        padding: 0;\\n        transform: scale(1);\\n        z-index: 1; }\\n  .row .carousel .handle {\\n    visibility: hidden;\\n    border: none;\\n    flex-grow: 0;\\n    flex-shrink: 0;\\n    background-color: rgba(0, 0, 0, 0.25);\\n    z-index: 10;\\n    margin: 0.25rem 0;\\n    width: 3rem;\\n    cursor: pointer;\\n    font-size: 5rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    color: #fff;\\n    line-height: 0;\\n    transition: background-color 150ms ease-in-out; }\\n    .row .carousel .handle left-handle {\\n      border-top-left-radius: 0;\\n      border-bottom-left-radius: 0; }\\n      .row .carousel .handle left-handle:hover::after {\\n        content: \\\\2039; }\\n    .row .carousel .handle rigth-handle {\\n      border-top-right-radius: 0;\\n      border-bottom-right-radius: 0; }\\n      .row .carousel .handle rigth-handle:hover::after {\\n        content: \\\\203A; }\\n    .row .carousel .handle .text {\\n      transition: transform 150ms ease-in-out;\\n      padding-bottom: 1rem; }\\n    .row .carousel .handle:hover, .row .carousel .handle:focus {\\n      background-color: rgba(255, 255, 255, 0.5);\\n      font-size: 6rem; }\\n      .row .carousel .handle:hover.text, .row .carousel .handle:focus.text {\\n        transform: scale(1, 2); }\\n\\n.footer {\\n  margin: 20px auto 0;\\n  padding: 50px 0px 10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column; }\\n  .footer .social-links {\\n    margin-bottom: 1em; }\\n    .footer .social-links .social-link {\\n      color: #fff;\\n      margin-right: 15px;\\n      cursor: pointer;\\n      text-decoration: none;\\n      font-size: 2.5rem; }\\n  .footer .copyright {\\n    color: #fff;\\n    font-size: 11px;\\n    margin-bottom: 15px; }\\n\\n@media (max-width: 1000px) {\\n  .row .carousel {\\n    height: 45%; }\\n    .row .carousel .slider {\\n      --items-per-screen: 4; } }\\n\\n@media screen and (max-width: 900px) {\\n  .row .carousel {\\n    height: 40%; }\\n    .row .carousel .slider {\\n      --items-per-screen: 4; }\\n      .row .carousel .slider > img {\\n        max-width: 25%; } }\\n\\n@media screen and (max-width: 800px) {\\n  header .container {\\n    flex-direction: column-reverse;\\n    text-align: center; }\\n    header .container .login {\\n      align-self: flex-end;\\n      margin-bottom: 1rem; }\\n  .movie-cover .selected-movie,\\n  .movie-cover .main-movie {\\n    font-size: 14px; }\\n    .movie-cover .selected-movie .description,\\n    .movie-cover .main-movie .description {\\n      min-width: 100%; }\\n  main .cast .cards {\\n    grid-template-columns: repeat(4, 20%);\\n    grid-gap: 5%; }\\n    main .cast .cards .card {\\n      margin-bottom: 2rem; }\\n      main .cast .cards .card .img {\\n        width: 100%;\\n        height: 40%; }\\n  .row .carousel {\\n    height: 40%; }\\n    .row .carousel .slider {\\n      --items-per-screen: 3; }\\n      .row .carousel .slider > img {\\n        max-width: 33.33333%; } }\\n\\n@media (max-width: 640px) {\\n  .row .header {\\n    flex-direction: column;\\n    align-items: flex-start; }\\n    .row .header .progress-bar {\\n      flex-wrap: wrap; }\\n  .row .carousel {\\n    height: 50%; }\\n    .row .carousel .slider {\\n      --items-per-screen: 2; }\\n      .row .carousel .slider > img {\\n        max-width: 50%; } }\\n\\n@media (max-width: 500px) {\\n  .row .carousel {\\n    height: 60%; }\\n    .row .carousel .slider {\\n      --items-per-screen: 3; }\\n  .movie-cover .main-movie .container .title,\\n  .movie-cover .selected-movie .container .title {\\n    margin-top: 1em;\\n    text-align: center; }\\n  .movie-cover .main-movie .container .buttons,\\n  .movie-cover .selected-movie .container .buttons {\\n    display: flex;\\n    flex-direction: column;\\n    align-content: center; }\\n    .movie-cover .main-movie .container .buttons .button,\\n    .movie-cover .selected-movie .container .buttons .button {\\n      margin-top: .5rem; }\\n  main .cast .cards {\\n    grid-template-columns: repeat(3, 32%);\\n    grid-gap: 2%; }\\n  main .info {\\n    flex-direction: column;\\n    align-content: center; }\\n    main .info .synopsis {\\n      width: 100%;\\n      padding-bottom: 1.5rem; }\\n    main .info .data-sheet {\\n      width: 100%; }\\n  .row .carousel .slider {\\n    --items-per-screen: 1; }\\n    .row .carousel .slider > img {\\n      max-width: 100%; } }\\n\\n@media (max-width: 400px) {\\n  header .container nav {\\n    display: flex;\\n    flex-direction: column;\\n    align-content: center; }\\n    header .container nav a {\\n      margin-top: .5rem; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://digitalers/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://digitalers/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://digitalers/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/views/home-banner.html":
/*!************************************!*\
  !*** ./src/views/home-banner.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"main-movie\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n        <h3 class=\\\"title\\\" id=\\\"title\\\"></h3>\\r\\n        <p class=\\\"description\\\" id=\\\"description\\\"></p>\\r\\n        <div class=\\\"buttons\\\">\\r\\n            <button role=\\\"button\\\"\\r\\n                class=\\\"button\\\"><i class=\\\"fa-solid fa-play\\\"></i> Reproducir</button>\\r\\n            <button role=\\\"button\\\"\\r\\n                class=\\\"button\\\" id=\\\"more-info\\\"><i class=\\\"fa-solid fa-circle-info\\\"></i> Más\\r\\n                información</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://digitalers/./src/views/home-banner.html?");

/***/ }),

/***/ "./src/views/home.html":
/*!*****************************!*\
  !*** ./src/views/home.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../js/carousel.js */ \"./src/js/carousel.js?c936\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<main>\\r\\n    <!--\\r\\n        Acá, como tenés tres div con la misma estructura,\\r\\n        podrías utilizar una sola como plantilla y luego\\r\\n        completar lo que es variable, como el título de la\\r\\n        sección, con javascript.\\r\\n    -->\\r\\n    <div class=\\\"row\\\">\\r\\n        <div class=\\\"header\\\">\\r\\n            <h3 class=\\\"title\\\">Destacados</h3>\\r\\n            <div class=\\\"progress-bar\\\">\\r\\n                <div class=\\\"progress-item active\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"carousel\\\">\\r\\n            <button class=\\\"handle left-handle\\\">\\r\\n                <div class=\\\"text\\\">&#8249</div>\\r\\n            </button>\\r\\n            <div class=\\\"slider\\\"\\r\\n                id=\\\"trending\\\">\\r\\n            </div>\\r\\n            <button class=\\\"handle right-handle\\\">\\r\\n                <div class=\\\"text\\\">&#8250</div>\\r\\n            </button>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"row\\\">\\r\\n        <div class=\\\"header\\\">\\r\\n            <h3 class=\\\"title\\\">Películas</h3>\\r\\n            <div class=\\\"progress-bar\\\">\\r\\n                <div class=\\\"progress-item active\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"carousel\\\">\\r\\n            <button class=\\\"handle left-handle\\\">\\r\\n                <div class=\\\"text\\\">&#8249</div>\\r\\n            </button>\\r\\n            <div class=\\\"slider\\\"\\r\\n                id=\\\"movies\\\">\\r\\n            </div>\\r\\n            <button class=\\\"handle right-handle\\\">\\r\\n                <div class=\\\"text\\\">&#8250</div>\\r\\n            </button>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"row\\\">\\r\\n        <div class=\\\"header\\\">\\r\\n            <h3 class=\\\"title\\\">Series</h3>\\r\\n            <div class=\\\"progress-bar\\\">\\r\\n                <div class=\\\"progress-item active\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n                <div class=\\\"progress-item\\\"></div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"carousel\\\">\\r\\n            <button class=\\\"handle left-handle\\\">\\r\\n                <div class=\\\"text\\\">&#8249</div>\\r\\n            </button>\\r\\n            <div class=\\\"slider\\\"\\r\\n                id=\\\"tv\\\">\\r\\n            </div>\\r\\n            <button class=\\\"handle right-handle\\\">\\r\\n                <div class=\\\"text\\\">&#8250</div>\\r\\n            </button>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"><\" + \"/script>\\r\\n</main>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://digitalers/./src/views/home.html?");

/***/ }),

/***/ "./src/views/movie-banner.html":
/*!*************************************!*\
  !*** ./src/views/movie-banner.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"selected-movie\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n        <h3 class=\\\"title\\\" id=\\\"title\\\"></h3>\\r\\n\\r\\n        <div class=\\\"buttons\\\">\\r\\n            <button role=\\\"button\\\"\\r\\n                class=\\\"button\\\"><i class=\\\"fa-solid fa-circle-plus\\\"></i> Agregar a mi\\r\\n                lista</button>\\r\\n            <button role=\\\"button\\\"\\r\\n                class=\\\"button\\\"><i class=\\\"fa-solid fa-play\\\"></i> Reproducir</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://digitalers/./src/views/movie-banner.html?");

/***/ }),

/***/ "./src/views/movie.html":
/*!******************************!*\
  !*** ./src/views/movie.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<main class=\\\"container\\\">\\r\\n    <div class=\\\"info\\\">\\r\\n        <div class=\\\"synopsis\\\">\\r\\n            <h3>Sinopsis</h3>\\r\\n            <p id=\\\"synopsis\\\"></p>\\r\\n        </div>\\r\\n        <div class=\\\"data-sheet\\\">\\r\\n            <h3>Ficha Técnica</h3>\\r\\n            <div class=\\\"data-title\\\">\\r\\n                Genero:\\r\\n            </div>\\r\\n            <div class=\\\"data-description\\\"\\r\\n                id=\\\"genre\\\"></div>\\r\\n            <div class=\\\"data-title\\\">\\r\\n                Lanzamiento:\\r\\n            </div>\\r\\n            <div class=\\\"data-description\\\"\\r\\n                id=\\\"year\\\"></div>\\r\\n            <div class=\\\"data-title\\\">\\r\\n                Calificacion (TMDB):\\r\\n            </div>\\r\\n            <div class=\\\"data-description\\\"\\r\\n                id=\\\"qualification\\\"></div>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"cast\\\">\\r\\n        <h3>Reparto</h3>\\r\\n        <div class=\\\"cards\\\"\\r\\n            id=\\\"cast\\\">\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n</main>\\r\\n\\r\\n<!-- <div class=\\\"row\\\">\\r\\n    <div class=\\\"header\\\">\\r\\n        <h3 class=\\\"title\\\">Relacionadas</h3>\\r\\n        <div class=\\\"progress-bar\\\">\\r\\n            <div class=\\\"progress-item active\\\"></div>\\r\\n            <div class=\\\"progress-item\\\"></div>\\r\\n            <div class=\\\"progress-item\\\"></div>\\r\\n            <div class=\\\"progress-item\\\"></div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"carousel\\\">\\r\\n        <button class=\\\"handle left-handle\\\">\\r\\n            <div class=\\\"text\\\">&#8249</div>\\r\\n        </button>\\r\\n        <div class=\\\"slider\\\"\\r\\n                id=\\\"similar\\\">\\r\\n            </div>\\r\\n        <button class=\\\"handle right-handle\\\">\\r\\n            <div class=\\\"text\\\">&#8250</div>\\r\\n        </button>\\r\\n    </div>\\r\\n</div> -->\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://digitalers/./src/views/movie.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://digitalers/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://digitalers/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://digitalers/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://digitalers/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://digitalers/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://digitalers/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://digitalers/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://digitalers/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controllers/home-banner.controller.js":
/*!***************************************************!*\
  !*** ./src/controllers/home-banner.controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_home_banner_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home-banner.html */ \"./src/views/home-banner.html\");\n\r\n\r\nfunction getRandomInt(max) {\r\n    return Math.floor(Math.random() * max);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n    const divElement = document.createElement('div');\r\n    divElement.innerHTML = _views_home_banner_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n    const getTrending = async () => {\r\n        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');\r\n        return response.json();\r\n    }\r\n\r\n    const trending = await getTrending();\r\n    const info = trending.results[getRandomInt(19)]\r\n\r\n    const cover = divElement.querySelector('.main-movie');\r\n    const poster = `https://www.themoviedb.org/t/p/w1280${info.backdrop_path}`;\r\n    cover.style.background = `url(${poster}) no-repeat center `;\r\n    cover.style.backgroundSize = \"cover\"\r\n\r\n    const title = divElement.querySelector('#title');\r\n    title.innerHTML = info.name || info.title;\r\n\r\n    const description = divElement.querySelector('#description');\r\n    description.innerHTML = info.overview;\r\n\r\n    const moreInfo = divElement.querySelector('#more-info');\r\n    let type;\r\n    if (info.media_type === 'movie') {\r\n      type = '/#movie/'\r\n    } else {\r\n      type = '/#tv/'\r\n    }\r\n    moreInfo.setAttribute('onclick', `document.location='${type}${info.id}'`)\r\n\r\n\r\n    return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://digitalers/./src/controllers/home-banner.controller.js?");

/***/ }),

/***/ "./src/controllers/home.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/home.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/views/home.html\");\n/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/carousel */ \"./src/js/carousel.js?2b04\");\n\r\n\r\nconst IMG_URL = 'https://image.tmdb.org/t/p/w500'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n  const navigate = (route) => {\r\n    document.location = route;\r\n  }\r\n\r\n  const divElement = document.createElement('div');\r\n  divElement.innerHTML = _views_home_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n  // Trending\r\n  const getTrending = async () => {\r\n    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');\r\n    return response.json();\r\n  }\r\n\r\n  const trendingElement = divElement.querySelector('#trending');\r\n  const trending = await getTrending();\r\n  trending.results.forEach(movie => {\r\n    let imgSrc = IMG_URL + movie.backdrop_path;\r\n    let type;\r\n    if (movie.media_type === 'movie') {\r\n      type = '#movie/'\r\n    } else {\r\n      type = '#tv/'\r\n    }\r\n    const img = document.createElement('img');\r\n    img.src = imgSrc;\r\n    img.alt = movie.name;\r\n    img.onclick = () => navigate(`${type}${movie.id}`);\r\n    trendingElement.appendChild(img);\r\n  });\r\n\r\n  // Movies\r\n  const getMovies = async () => {\r\n    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');\r\n    return response.json();\r\n  }\r\n  const moviesElement = divElement.querySelector('#movies');\r\n  const movies = await getMovies();\r\n  movies.results.forEach(movie => {\r\n    let imgSrc = IMG_URL + movie.backdrop_path;\r\n    const img = document.createElement('img');\r\n    img.src = imgSrc;\r\n    img.alt = movie.name;\r\n    img.onclick = () => navigate(`#movie/${movie.id}`);\r\n    moviesElement.appendChild(img);\r\n  })\r\n\r\n  // TV\r\n  const getTv = async () => {\r\n    const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db');\r\n    return response.json();\r\n  }\r\n  const tvElement = divElement.querySelector('#tv');\r\n  const tv = await getTv();\r\n  tv.results.forEach(movie => {\r\n    let imgSrc = IMG_URL + movie.backdrop_path;\r\n    const img = document.createElement('img');\r\n    img.src = imgSrc;\r\n    img.alt = movie.name;\r\n    img.onclick = () => navigate(`#tv/${movie.id}`);\r\n    tvElement.appendChild(img);\r\n  })\r\n\r\n\r\n  document.addEventListener(\"click\", e => {\r\n    let handle\r\n    if (e.target.matches(\".handle\")) {\r\n      handle = e.target\r\n    } else {\r\n      handle = e.target.closest(\".handle\")\r\n    }\r\n    if (handle != null) (0,_js_carousel__WEBPACK_IMPORTED_MODULE_1__.onHandleClick)(handle)\r\n  })\r\n\r\n  const throttleProgressBar = (0,_js_carousel__WEBPACK_IMPORTED_MODULE_1__.throttle)(() => {\r\n    document.querySelectorAll(\".progress-bar\").forEach(_js_carousel__WEBPACK_IMPORTED_MODULE_1__.calculateProgressBar)\r\n  }, 250)\r\n\r\n  window.addEventListener(\"resize\", throttleProgressBar)\r\n\r\n  document.querySelectorAll(\".progress-bar\").forEach(_js_carousel__WEBPACK_IMPORTED_MODULE_1__.calculateProgressBar)\r\n\r\n  return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://digitalers/./src/controllers/home.controller.js?");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pages\": () => (/* binding */ pages)\n/* harmony export */ });\n/* harmony import */ var _home_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.controller */ \"./src/controllers/home.controller.js\");\n/* harmony import */ var _home_banner_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-banner.controller */ \"./src/controllers/home-banner.controller.js\");\n/* harmony import */ var _movie_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-controller */ \"./src/controllers/movie-controller.js\");\n/* harmony import */ var _movie_banner_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-banner.controller */ \"./src/controllers/movie-banner.controller.js\");\n/* harmony import */ var _tv_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv.controller */ \"./src/controllers/tv.controller.js\");\n/* harmony import */ var _tv_banner_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv-banner.controller */ \"./src/controllers/tv-banner.controller.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pages = {\r\n    home : _home_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    homeBanner : _home_banner_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ,\r\n    movie : _movie_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \r\n    movieBanner : _movie_banner_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    tv : _tv_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n    tvBanner: _tv_banner_controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\r\n}\r\n\r\n\n\n//# sourceURL=webpack://digitalers/./src/controllers/index.js?");

/***/ }),

/***/ "./src/controllers/movie-banner.controller.js":
/*!****************************************************!*\
  !*** ./src/controllers/movie-banner.controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_movie_banner_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/movie-banner.html */ \"./src/views/movie-banner.html\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n    const divElement = document.createElement('div');\r\n    divElement.innerHTML = _views_movie_banner_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n\r\n    let id = window.location.hash.split('/')[1]\r\n\r\n    const getInfo = async () => {\r\n        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n        return response.json();\r\n    }\r\n\r\n    const info = await getInfo();\r\n\r\n    const cover = divElement.querySelector('.selected-movie');\r\n    let poster = `https://www.themoviedb.org/t/p/w1280${info.backdrop_path}`;\r\n    cover.style.background = `url(${poster}) no-repeat center `;\r\n    cover.style.backgroundSize = \"cover\"\r\n\r\n    const title = divElement.querySelector('#title');\r\n    title.innerHTML = info.title;\r\n\r\n    return divElement;\r\n});\n\n//# sourceURL=webpack://digitalers/./src/controllers/movie-banner.controller.js?");

/***/ }),

/***/ "./src/controllers/movie-controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/movie-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_movie_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/movie.html */ \"./src/views/movie.html\");\n/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/carousel */ \"./src/js/carousel.js?2b04\");\n\r\n\r\nconst IMG_URL = 'https://image.tmdb.org/t/p/w500'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n    let divElement = '';\r\n    divElement = document.createElement('div');\r\n    divElement.innerHTML = _views_movie_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n    let id = window.location.hash.split('/')[1]\r\n\r\n    const getInfo = async () => {\r\n        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n        return response.json();\r\n    }\r\n\r\n    const info = await getInfo();\r\n\r\n    const synopsis = divElement.querySelector('#synopsis');\r\n    const genre = divElement.querySelector('#genre');\r\n    const year = divElement.querySelector('#year');\r\n    const qualification = divElement.querySelector('#qualification');\r\n\r\n    synopsis.innerHTML = info.overview;\r\n    year.innerHTML = info.release_date.split('-')[0];\r\n    qualification.innerHTML = info.vote_average + \"/10\";\r\n\r\n    genre.innerHTML += info.genres?.map(({ name })=> name).join(', ') || '';\r\n\r\n    const getCredit = async () => {\r\n        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n        return response.json();\r\n    }\r\n\r\n    const castElement = divElement.querySelector('#cast');\r\n    const credits = await getCredit();\r\n\r\n    const castLength = Math.min(12, credits.cast.length);\r\n\r\n    for (let i = 0; i < castLength; i++) {\r\n        let img;\r\n        if (credits.cast[i].profile_path === null) {\r\n            img = 'https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsImNvbXBpbGVkX3RoZW1lX2Fzc2V0cy9FTElHTyBSRUNSVUlUTUVOVC9wbmcvdXNlci1wcm9maWxlLWRlZmF1bHQucG5nIl1d';\r\n        } else {\r\n            img = IMG_URL + credits.cast[i].profile_path;\r\n        }\r\n\r\n\r\n        castElement.innerHTML += `\r\n        <div class=\"card\">\r\n            <img src=\"${img}\" alt=\"${credits.cast[i].name}\">\r\n            <div class=\"card-container\">\r\n                <p class=\"actor\">${credits.cast[i].name}</p>\r\n                <p class=\"character\">${credits.cast[i].character}</p>\r\n            </div>\r\n        </div>\r\n        `\r\n    }\r\n\r\n\r\n\r\n    // const getSimilar = async () => {\r\n    //     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n    //     return response.json();\r\n    // }\r\n\r\n    // const similarElement = divElement.querySelector('#similar');\r\n    // const similar = await getSimilar();\r\n    // console.log(similar)\r\n    // similar.results.forEach(movie => {\r\n    //     let img = IMG_URL + movie.backdrop_path;\r\n    //     similarElement.innerHTML += `\r\n    //     <img src=\"${img}\" onclick=\"document.location=this.id+'${type}${movie.id}'\" alt=\"${movie.name}\">\r\n    //     `\r\n    // });\r\n\r\n    document.addEventListener(\"click\", e => {\r\n        let handle\r\n        if (e.target.matches(\".handle\")) {\r\n            handle = e.target\r\n        } else {\r\n            handle = e.target.closest(\".handle\")\r\n        }\r\n        if (handle != null) (0,_js_carousel__WEBPACK_IMPORTED_MODULE_1__.onHandleClick)(handle)\r\n    })\r\n\r\n    const throttleProgressBar = (0,_js_carousel__WEBPACK_IMPORTED_MODULE_1__.throttle)(() => {\r\n        document.querySelectorAll(\".progress-bar\").forEach(_js_carousel__WEBPACK_IMPORTED_MODULE_1__.calculateProgressBar)\r\n    }, 250)\r\n\r\n    window.addEventListener(\"resize\", throttleProgressBar)\r\n\r\n    document.querySelectorAll(\".progress-bar\").forEach(_js_carousel__WEBPACK_IMPORTED_MODULE_1__.calculateProgressBar)\r\n\r\n    return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://digitalers/./src/controllers/movie-controller.js?");

/***/ }),

/***/ "./src/controllers/tv-banner.controller.js":
/*!*************************************************!*\
  !*** ./src/controllers/tv-banner.controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_movie_banner_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/movie-banner.html */ \"./src/views/movie-banner.html\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n    const divElement = document.createElement('div');\r\n    divElement.innerHTML = _views_movie_banner_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n    let id = window.location.hash.split('/')[1]\r\n\r\n    const getInfo = async () => {\r\n        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n        return response.json();\r\n    }\r\n\r\n    const info = await getInfo();\r\n\r\n    const cover = divElement.querySelector('.selected-movie');\r\n    let back = `https://www.themoviedb.org/t/p/w1280${info.backdrop_path}`;\r\n    let poster = `https://www.themoviedb.org/t/p/w1280${info.poster_path}`;\r\n    if (back != null){\r\n        cover.style.background = `url(${back}) no-repeat center `;\r\n    }else {\r\n        cover.style.background = `url(${poster}) no-repeat center `;\r\n    }\r\n\r\n    cover.style.backgroundSize = \"cover\"\r\n\r\n    const title = divElement.querySelector('#title');\r\n    title.innerHTML = info.name;\r\n\r\n    return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://digitalers/./src/controllers/tv-banner.controller.js?");

/***/ }),

/***/ "./src/controllers/tv.controller.js":
/*!******************************************!*\
  !*** ./src/controllers/tv.controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_movie_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/movie.html */ \"./src/views/movie.html\");\n/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/carousel */ \"./src/js/carousel.js?2b04\");\n\r\n\r\nconst IMG_URL = 'https://image.tmdb.org/t/p/w500'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n    let divElement = '';\r\n    divElement = document.createElement('div');\r\n    divElement.innerHTML = _views_movie_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n    let id = window.location.hash.split('/')[1]\r\n\r\n    const getInfo = async () => {\r\n        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n        return response.json();\r\n    }\r\n\r\n    const info = await getInfo();\r\n\r\n    const synopsis = divElement.querySelector('#synopsis');\r\n    const genre = divElement.querySelector('#genre');\r\n    const year = divElement.querySelector('#year');\r\n    const qualification = divElement.querySelector('#qualification');\r\n\r\n    synopsis.innerHTML = info.overview;\r\n    year.innerHTML = info.first_air_date\r\n    .split('-')[0];\r\n    qualification.innerHTML = info.vote_average + \"/10\";\r\n\r\n    genre.innerHTML += info.genres?.map(({ name })=> name).join(', ') || '';\r\n\r\n    const getCredits = async () => {\r\n        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n        return response.json();\r\n    }\r\n\r\n    const castElement = divElement.querySelector('#cast');\r\n    const credits = await getCredits();\r\n\r\n    const castLength = Math.min(12, credits.cast.length);\r\n\r\n    for (let i = 0; i < castLength; i++) {\r\n        let img;\r\n        if(credits.cast[i].profile_path === null){\r\n            img = 'https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsImNvbXBpbGVkX3RoZW1lX2Fzc2V0cy9FTElHTyBSRUNSVUlUTUVOVC9wbmcvdXNlci1wcm9maWxlLWRlZmF1bHQucG5nIl1d';\r\n        }else{\r\n            img = IMG_URL + credits.cast[i].profile_path;\r\n        }\r\n\r\n\r\n        castElement.innerHTML += `\r\n        <div class=\"card\">\r\n            <img src=\"${img}\">\r\n            <div class=\"card-container\">\r\n                <p class=\"actor\">${credits.cast[i].name}</p>\r\n                <p class=\"character\">${credits.cast[i].character}</p>\r\n            </div>\r\n        </div>\r\n        `\r\n    }\r\n\r\n    // const getSimilar = async () => {\r\n    //     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);\r\n    //     return response.json();\r\n    // }\r\n\r\n    // const similarElement = divElement.querySelector('#similar');\r\n    // const similar = await getSimilar();\r\n    // similar.results.forEach(movie => {\r\n    //     let img = IMG_URL + movie.backdrop_path;\r\n    //     similarElement.innerHTML += `\r\n    //     <img src=\"${img}\" onclick=\"document.location=this.id+'/#tv/${movie.id}'\" alt=\"${movie.name}\">\r\n    //     `\r\n    // });\r\n\r\n    document.addEventListener(\"click\", e => {\r\n        let handle\r\n        if (e.target.matches(\".handle\")) {\r\n            handle = e.target\r\n        } else {\r\n            handle = e.target.closest(\".handle\")\r\n        }\r\n        if (handle != null) (0,_js_carousel__WEBPACK_IMPORTED_MODULE_1__.onHandleClick)(handle)\r\n    })\r\n\r\n    const throttleProgressBar = (0,_js_carousel__WEBPACK_IMPORTED_MODULE_1__.throttle)(() => {\r\n        document.querySelectorAll(\".progress-bar\").forEach(_js_carousel__WEBPACK_IMPORTED_MODULE_1__.calculateProgressBar)\r\n    }, 250)\r\n\r\n    window.addEventListener(\"resize\", throttleProgressBar)\r\n\r\n    document.querySelectorAll(\".progress-bar\").forEach(_js_carousel__WEBPACK_IMPORTED_MODULE_1__.calculateProgressBar)\r\n\r\n\r\n    return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://digitalers/./src/controllers/tv.controller.js?");

/***/ }),

/***/ "./src/js/carousel.js?2b04":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateProgressBar\": () => (/* binding */ calculateProgressBar),\n/* harmony export */   \"onHandleClick\": () => (/* binding */ onHandleClick),\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nfunction calculateProgressBar(progressBar) {\r\n  progressBar.innerHTML = \"\"\r\n  const slider = progressBar.closest(\".row\").querySelector(\".slider\")\r\n  const itemCount = slider.children.length\r\n  const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue(\"--items-per-screen\"))\r\n  const sliderIndex = parseInt(\r\n    getComputedStyle(slider).getPropertyValue(\"--slider-index\")\r\n  )\r\n  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)\r\n\r\n  if (sliderIndex >= progressBarItemCount){\r\n    slider.style.setProperty(\"--slider-index\", progressBarItemCount - 1)\r\n    sliderIndex = progressBarItemCount -1\r\n  }\r\n\r\n  for (let i = 0; i < progressBarItemCount; i++) {\r\n    const barItem = document.createElement(\"div\")\r\n    barItem.classList.add(\"progress-item\")\r\n    if (i === sliderIndex) {\r\n      barItem.classList.add(\"active\")\r\n    }\r\n    progressBar.append(barItem)\r\n  }\r\n}\r\n\r\nfunction onHandleClick(handle) {\r\n  const progressBar = handle.closest(\".row\").querySelector(\".progress-bar\")\r\n  const slider = handle.closest(\".carousel\").querySelector(\".slider\")\r\n  const sliderIndex = parseInt(\r\n    getComputedStyle(slider).getPropertyValue(\"--slider-index\")\r\n  )\r\n\r\n  const progressBarItemCount = progressBar.children.length\r\n  if (handle.classList.contains(\"left-handle\")) {\r\n    if (sliderIndex - 1 < 0) {\r\n      slider.style.setProperty(\"--slider-index\", progressBarItemCount - 1)\r\n      progressBar.children[sliderIndex].classList.remove(\"active\")\r\n      progressBar.children[progressBarItemCount - 1].classList.add(\"active\")\r\n    } else {\r\n      slider.style.setProperty(\"--slider-index\", sliderIndex - 1)\r\n      progressBar.children[sliderIndex].classList.remove(\"active\")\r\n      progressBar.children[sliderIndex - 1].classList.add(\"active\")\r\n    }\r\n\r\n  }\r\n\r\n  if (handle.classList.contains(\"right-handle\")) {\r\n    if (sliderIndex + 1 >= progressBarItemCount) {\r\n      slider.style.setProperty(\"--slider-index\", 0)\r\n      progressBar.children[sliderIndex].classList.remove(\"active\")\r\n      progressBar.children[0].classList.add(\"active\")\r\n    } else {\r\n      slider.style.setProperty(\"--slider-index\", sliderIndex + 1)\r\n      progressBar.children[sliderIndex].classList.remove(\"active\")\r\n      progressBar.children[sliderIndex + 1].classList.add(\"active\")\r\n    }\r\n  }\r\n}\r\n\r\nfunction throttle(cb, delay = 1000) {\r\n  let shouldWait = false\r\n  let waitingArgs\r\n  const timeoutFunc = () => {\r\n    if (waitingArgs == null) {\r\n      shouldWait = false\r\n    } else {\r\n      cb(...waitingArgs)\r\n      waitingArgs = null\r\n      setTimeout(timeoutFunc, delay)\r\n    }\r\n  }\r\n\r\n  return (...args) => {\r\n    if (shouldWait) {\r\n      waitingArgs = args\r\n      return\r\n    }\r\n\r\n    cb(...args)\r\n    shouldWait = true\r\n    setTimeout(timeoutFunc, delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://digitalers/./src/js/carousel.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _router_index_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/index.routes */ \"./src/router/index.routes.js\");\n\r\n\r\n\r\n// import { navegar } from './router/index.routes'\r\n\r\n(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash);\r\nwindow.addEventListener('hashchange', () =>{\r\n    (0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash);\r\n})\n\n//# sourceURL=webpack://digitalers/./src/main.js?");

/***/ }),

/***/ "./src/router/index.routes.js":
/*!************************************!*\
  !*** ./src/router/index.routes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/index */ \"./src/controllers/index.js\");\n\r\n\r\nlet content = document.getElementById('container');\r\nlet banner = document.getElementById('banner-movie');\r\n\r\n\r\nconst router = async (route) => {\r\n    content.innerHTML = '';\r\n    banner.innerHTML = '';\r\n\r\n    if (route === '' || route === '#'){\r\n        return content.appendChild(await _controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.home()) & banner.appendChild(await _controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.homeBanner());\r\n    }else if(route.includes('movie')){\r\n        return content.appendChild(await _controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.movie()) & banner.appendChild(await _controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.movieBanner());\r\n    }else if(route.includes('tv')){\r\n        return content.appendChild(await _controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.tv()) & banner.appendChild(await _controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.tvBanner());\r\n    }else{\r\n        console.log('404')\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://digitalers/./src/router/index.routes.js?");

/***/ }),

/***/ "./src/js/carousel.js?c936":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8755fc20ba4c2789c15.js\";\n\n//# sourceURL=webpack://digitalers/./src/js/carousel.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;