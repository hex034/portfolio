"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/index/Footer.tsx":
/*!*****************************************!*\
  !*** ./src/components/index/Footer.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Divider */ \"./src/components/Divider.tsx\");\n\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            className: \"max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Divider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\cod\\\\spgunk\\\\src\\\\components\\\\index\\\\Footer.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-leaguespartan text-center font-semibold text-base text-text pt-2\",\n                    children: \"spgunk.eu.org - Feito com NextJS, TailwindCSS, e com ❤ por mim\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\cod\\\\spgunk\\\\src\\\\components\\\\index\\\\Footer.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\cod\\\\spgunk\\\\src\\\\components\\\\index\\\\Footer.tsx\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC9Gb290ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBRTVCLFNBQVNDO0lBQ3BCLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFPQyxXQUFVOzs4QkFDZCw4REFBQ0gsMkRBQU9BOzs7Ozs4QkFDUiw4REFBQ0k7b0JBQUdELFdBQVU7OEJBQXdFOzs7Ozs7Ozs7Ozs7O0FBTXRHO0tBWHdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbmRleC9Gb290ZXIudHN4P2RkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpdmlkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9EaXZpZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWF4LXctNHhsIHctZnVsbCBmbGV4IGZsZXgtY29sIG14LWF1dG8gcHQtNCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtbGVhZ3Vlc3BhcnRhbiB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LXRleHQgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHNwZ3Vuay5ldS5vcmcgLSBGZWl0byBjb20gTmV4dEpTLCBUYWlsd2luZENTUywgZSBjb20g4p2kIHBvciBtaW0gXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRpdmlkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJjbGFzc05hbWUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/index/Footer.tsx\n"));

/***/ })

});