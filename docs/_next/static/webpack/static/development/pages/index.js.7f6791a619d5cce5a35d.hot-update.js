webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TaxFilingCard.js":
/*!*************************************!*\
  !*** ./components/TaxFilingCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "/home/emre/project/stimulus-plus/components/TaxFilingCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useState = function useState() {
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref) {
    var filingStatus = _ref.filingStatus,
        filingYear = _ref.filingYear;
    return {
      filingYear: filingYear,
      filingStatus: filingStatus
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var setFilingYear = function setFilingYear(val) {
    return dispatch({
      type: 'SET_FILING_YEAR',
      payload: val
    });
  };

  var setFilingStatus = function setFilingStatus(val) {
    return dispatch({
      type: 'SET_FILING_STATUS',
      payload: val
    });
  };

  return {
    state: state,
    setFilingYear: setFilingYear,
    setFilingStatus: setFilingStatus
  };
};

var TaxFilingCard = function TaxFilingCard() {
  var _useState = useState(),
      state = _useState.state,
      setFilingYear = _useState.setFilingYear,
      setFilingStatus = _useState.setFilingStatus;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: ' tax-filing-card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Tax Filing Status"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Did you file your 2019 taxes? ", ' ', " \xA0", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      fontSize: '12px',
      fontWeight: '700'
    },
    outline: true,
    type: "button",
    id: "fileTaxPopover",
    color: "secondary",
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Info"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledPopover"], {
    trigger: "focus",
    placement: "top",
    target: "fileTaxPopover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PopoverBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "If you filed both 2019 and 2018, your 2019 filing will be used. You must have filed either 2019 or 2018 taxes to qualify. If you have not filed 2018, or do not qualify for 2018 filing (e.g. you were a dependent), file your 2019 ASAP."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingYear(2019);
    },
    active: state.filingYear === 2019,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "Yes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingYear(2018);
    },
    active: state.filingYear === 2018,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "No")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "Were you a dependent in ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  }, state.filingYear), " ? ", ' ', " \xA0", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      fontSize: '12px',
      fontWeight: '700'
    },
    outline: true,
    type: "button",
    id: "fileTaxPopover",
    color: "secondary",
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Info"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledPopover"], {
    trigger: "focus",
    placement: "top",
    target: "fileTaxPopover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PopoverBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "If you filed both 2019 and 2018, your 2019 filing will be used. You must have filed either 2019 or 2018 taxes to qualify. If you have not filed 2018, or do not qualify for 2018 filing (e.g. you were a dependent), file your 2019 ASAP."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingYear(2019);
    },
    active: state.filingYear === 2019,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Yes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingYear(2018);
    },
    active: state.filingYear === 2018,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "No")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "Filing status for ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 42
    }
  }, state.filingYear), ":"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingStatus(1);
    },
    active: state.filingStatus === 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, "Single"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingStatus(2);
    },
    active: state.filingStatus === 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, "Married"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingStatus(3);
    },
    active: state.filingStatus === 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "Head of Household"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaxFilingCard);

/***/ })

})
//# sourceMappingURL=index.js.7f6791a619d5cce5a35d.hot-update.js.map