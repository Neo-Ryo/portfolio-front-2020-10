webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _lib_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/url */ \"./lib/url.js\");\n/* harmony import */ var _lib_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Alert */ \"./components/Alert.js\");\n\n\nvar _jsxFileName = \"/home/masato/work/portfolio-front-2020-10/components/Footer.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Footer(_ref) {\n  _s();\n\n  var views = _ref.views,\n      likes = _ref.likes;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      liked = _useState[0],\n      setLiked = _useState[1];\n\n  var handleLikes = function handleLikes(e) {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(\"\".concat(_lib_url__WEBPACK_IMPORTED_MODULE_4___default.a, \"/api/counts/likes\"));\n    setLiked(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    style: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      margin: 0,\n      background: 'rgb(23,23,23)'\n    }, \"background\", 'linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(74,73,73,1) 70%, rgba(98,97,97,0.7861345221682423) 100%)'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    sm: {\n      size: 6\n    },\n    style: {\n      textAlign: 'center',\n      marginTop: '8vh'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    color: \"primary\",\n    outline: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, \"Site visited \", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n    color: \"secondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 38\n    }\n  }, views))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    style: {\n      textAlign: 'center',\n      marginTop: '8vh'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    style: {\n      color: '#ffc107',\n      fontSize: 22\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }, \"This website is made with love and Next.js by Marc S.\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    style: {\n      textAlign: 'center',\n      marginTop: '8vh'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    color: \"danger\",\n    outline: true,\n    disabled: liked,\n    onClick: function onClick(e) {\n      return handleLikes(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, \"Like \", __jsx(\"img\", {\n    src: \"/images/heart20px.png\",\n    alt: \"like icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 30\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n    color: \"secondary\",\n    style: {\n      marginLeft: 10\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 25\n    }\n  }, liked ? likes + 1 : likes)), liked ? __jsx(_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    color: \"danger\",\n    message: \"Thank you!!!\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }) : '')));\n}\n\n_s(Footer, \"5oFMLl0KA2P+7Df5hTCAaQ+yYE8=\");\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanM/ZjI1NiJdLCJuYW1lcyI6WyJGb290ZXIiLCJ2aWV3cyIsImxpa2VzIiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiaGFuZGxlTGlrZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJBeGlvcyIsInB1dCIsInVybCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJzaXplIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNuQkMsc0RBQVEsQ0FBQyxLQUFELENBRFc7QUFBQSxNQUN0Q0MsS0FEc0M7QUFBQSxNQUMvQkMsUUFEK0I7O0FBRzdDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGdEQUFLLENBQUNDLEdBQU4sV0FBYUMsK0NBQWI7QUFDQU4sWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNILEdBSkQ7O0FBS0EsU0FDSSxtRUFDSSxNQUFDLDhDQUFEO0FBQ0ksU0FBSztBQUNETyxZQUFNLEVBQUUsQ0FEUDtBQUVEQyxnQkFBVSxFQUFFO0FBRlgscUJBSUcsMEdBSkgsQ0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUksTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBRztBQUFDQyxVQUFJLEVBQUU7QUFBUCxLQUFWO0FBQXdCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsUUFBYjtBQUF1QkMsZUFBUyxFQUFFO0FBQWxDLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsV0FBTyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNpQixNQUFDLGdEQUFEO0FBQU8sU0FBSyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQmYsS0FBMUIsQ0FEakIsQ0FESixDQVJKLEVBYUksTUFBQyw4Q0FBRDtBQUNJLFNBQUssRUFBRTtBQUNIYyxlQUFTLEVBQUUsUUFEUjtBQUVIQyxlQUFTLEVBQUU7QUFGUixLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSTtBQUFHLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsY0FBUSxFQUFFO0FBQTlCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFOSixDQWJKLEVBdUJJLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUgsZUFBUyxFQUFFLFFBQWI7QUFBdUJDLGVBQVMsRUFBRTtBQUFsQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlEQUFEO0FBQ0ksU0FBSyxFQUFDLFFBRFY7QUFFSSxXQUFPLE1BRlg7QUFHSSxZQUFRLEVBQUVaLEtBSGQ7QUFJSSxXQUFPLEVBQUUsaUJBQUNHLENBQUQ7QUFBQSxhQUFPRCxXQUFXLENBQUNDLENBQUQsQ0FBbEI7QUFBQSxLQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FNUztBQUFLLE9BQUcsRUFBQyx1QkFBVDtBQUFpQyxPQUFHLEVBQUMsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ULEVBT0ksTUFBQyxnREFBRDtBQUFPLFNBQUssRUFBQyxXQUFiO0FBQXlCLFNBQUssRUFBRTtBQUFFWSxnQkFBVSxFQUFFO0FBQWQsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZixLQUFLLEdBQUdGLEtBQUssR0FBRyxDQUFYLEdBQWVBLEtBRHpCLENBUEosQ0FESixFQVlLRSxLQUFLLEdBQ0YsTUFBQyw4Q0FBRDtBQUFPLFNBQUssRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBQyxjQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREUsR0FHRixFQWZSLENBdkJKLENBREosQ0FESjtBQThDSDs7R0F0RHVCSixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQmFkZ2UsIEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IHVybCBmcm9tICcuLi9saWIvdXJsJ1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcih7IHZpZXdzLCBsaWtlcyB9KSB7XG4gICAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUxpa2VzID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIEF4aW9zLnB1dChgJHt1cmx9L2FwaS9jb3VudHMvbGlrZXNgKVxuICAgICAgICBzZXRMaWtlZCh0cnVlKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJvd1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMywyMywyMyknLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzLDIzLDIzLDEpIDAlLCByZ2JhKDc0LDczLDczLDEpIDcwJSwgcmdiYSg5OCw5Nyw5NywwLjc4NjEzNDUyMjE2ODI0MjMpIDEwMCUpJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb2wgc209eyB7c2l6ZTogNiAgIH19IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzh2aCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb3V0bGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUgdmlzaXRlZCA8QmFkZ2UgY29sb3I9XCJzZWNvbmRhcnlcIj57dmlld3N9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzh2aCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyNmZmMxMDcnLCBmb250U2l6ZTogMjIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdlYnNpdGUgaXMgbWFkZSB3aXRoIGxvdmUgYW5kIE5leHQuanMgYnkgTWFyYyBTLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc4dmgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bGlrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTGlrZXMoZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpa2UgPGltZyBzcmM9XCIvaW1hZ2VzL2hlYXJ0MjBweC5wbmdcIiBhbHQ9XCJsaWtlIGljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpa2VkID8gbGlrZXMgKyAxIDogbGlrZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge2xpa2VkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCIgbWVzc2FnZT1cIlRoYW5rIHlvdSEhIVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ })

})