webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/EstimateCard.js":
/*!************************************!*\
  !*** ./components/EstimateCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "/home/emre/project/stimulus-plus/components/EstimateCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useState = function useState() {
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref) {
    var filingStatus = _ref.filingStatus,
        incomeAmount = _ref.incomeAmount,
        numOfChildren = _ref.numOfChildren,
        dependentStatus = _ref.dependentStatus;
    return {
      filingStatus: filingStatus,
      numOfChildren: numOfChildren,
      incomeAmount: incomeAmount,
      dependentStatus: dependentStatus
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"]);
  return {
    state: state
  };
};

var EstimateCard = function EstimateCard() {
  var _useState = useState(),
      state = _useState.state;

  var filingStatusType = {
    SINGLE: 1,
    MARRIED: 2,
    HEAD_OF_HOUSEHOLD: 3
  };

  function parseAmountForDisplay(amount) {
    // Can't get less than $0 unless :yin: is President
    var amountOutput = amount;

    if (amount < 1) {
      amountOutput = 0;
    }

    return amountOutput;
  }

  function getAmounts(data) {
    // Default values for filing status Single
    var baseAmount = 1200;
    var excessLimit = 75000;
    var maxLimit = 99000;

    if (data.filingStatus === filingStatusType.HEAD_OF_HOUSEHOLD) {
      baseAmount = 1200;
      excessLimit = 112500;
      maxLimit = 136500;
    } else if (data.filingStatus === filingStatusType.MARRIED) {
      baseAmount = 2400;
      excessLimit = 150000;
      maxLimit = 198000;
    }

    var amountForIncome = baseAmount;
    var amountForChildren = data.numOfChildren * 500;
    var startingTotal = amountForIncome + amountForChildren;
    var excessIncomeDiff = 0; // Subtract $5 for every $100 in excess income

    if (data.incomeAmount > excessLimit) {
      var excessIncomeAmnt = data.incomeAmount - excessLimit;
      excessIncomeDiff = excessIncomeAmnt / 100 * 5;
    }

    var totalAmount = startingTotal - excessIncomeDiff; // This is probably not 100% correct way to do things but not a big deal I think
    // Main goal is to show how much parents get for their children

    if (data.incomeAmount > excessLimit) {
      amountForIncome = totalAmount - amountForChildren;
    }

    if (data.incomeAmount > maxLimit) {
      amountForIncome = 0;
      amountForChildren = totalAmount;
    }

    return {
      totalAmount: totalAmount,
      amountForIncome: amountForIncome,
      amountForChildren: amountForChildren
    };
  }

  var allAmounts = getAmounts(state);
  var amountForIncome = parseAmountForDisplay(allAmounts.amountForIncome);
  var amountForChildren = parseAmountForDisplay(allAmounts.amountForChildren);
  var totalAmount = parseAmountForDisplay(allAmounts.totalAmount);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "Payment Estimate"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: 'your-money-cards justify-content-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "3 align-self-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: "your-money-total",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, "Total \uD83D\uDCB5"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: 'total-stimulus',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, "$", totalAmount))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "1 align-self-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: 'your-money-sign',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, "=")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "3 align-self-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("h6", {
    className: 'your-money-info-title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, "Based on Income"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: 'your-money-info-amount',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, "$", amountForIncome))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "1 align-self-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: 'your-money-sign',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, "+")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "3 align-self-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("h6", {
    className: 'your-money-info-title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, "Based on Children"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: 'your-money-info-amount',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, "$", amountForChildren)))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "secondary",
    style: {
      marginTop: '18px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "Like the idea of direct cash for individuals? Consider supporting\xA0", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://movehumanityforward.com/",
    target: "_blank",
    rel: "noreferrer noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 20
    }
  }, "a UBI non-profit (Humanity Forward)")), "."));
};

/* harmony default export */ __webpack_exports__["default"] = (EstimateCard);

/***/ })

})
//# sourceMappingURL=index.js.0c1096583f5369f0f96d.hot-update.js.map