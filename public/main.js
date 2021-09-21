/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\n\nwindow.addEventListener('load', () => {\n    const carousels = document.querySelectorAll('.carousel');\n    for (var i = 0; i < carousels.length; i++) {\n        (0,_util__WEBPACK_IMPORTED_MODULE_0__.carousel)(carousels[i]);\n    }\n});\n\n\n//# sourceURL=webpack://3d-carousel/./src/index.ts?");

/***/ }),

/***/ "./src/util/carousel.ts":
/*!******************************!*\
  !*** ./src/util/carousel.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": function() { return /* binding */ carousel; }\n/* harmony export */ });\nconst carousel = (root) => {\n    var _a;\n    let figure = root.querySelector('figure'), nav = root.querySelector('nav'), images = figure === null || figure === void 0 ? void 0 : figure.children, n = (_a = images === null || images === void 0 ? void 0 : images.length) !== null && _a !== void 0 ? _a : 0, gap = root.dataset.gap || 0, bfc = 'bfc' in root.dataset, theta = (2 * Math.PI) / n, currImage = 0;\n    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));\n    window.addEventListener('resize', () => {\n        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));\n    });\n    setupNavigation();\n    function setupCarousel(n, s) {\n        var apothem = s / (2 * Math.tan(Math.PI / n));\n        figure.style.transformOrigin = `50% 50% ${-apothem}px`;\n        for (var i = 0; i < n; i++)\n            images[i].style.padding = `${gap}px`;\n        for (i = 1; i < n; i++) {\n            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;\n            images[i].style.transform = `rotateY(${i * theta}rad)`;\n        }\n        if (bfc)\n            for (i = 0; i < n; i++)\n                images[i].style.backfaceVisibility = 'hidden';\n        rotateCarousel(currImage);\n    }\n    function setupNavigation() {\n        nav.addEventListener('click', onClick, true);\n        function onClick(e) {\n            e.stopPropagation();\n            var t = e.target;\n            if (t.tagName.toUpperCase() != 'BUTTON')\n                return;\n            if (t.classList.contains('next')) {\n                currImage++;\n            }\n            else {\n                currImage--;\n            }\n            rotateCarousel(currImage);\n        }\n    }\n    function rotateCarousel(imageIndex) {\n        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;\n    }\n};\n\n\n//# sourceURL=webpack://3d-carousel/./src/util/carousel.ts?");

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": function() { return /* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_0__.carousel; }\n/* harmony export */ });\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/util/carousel.ts\");\n\n\n\n\n//# sourceURL=webpack://3d-carousel/./src/util/index.ts?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;