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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint \"react/react-in-jsx-scopt\": \"off\" */\n\n/* globals React ReactDOM */\n\n/* eslint \"react/jsx-no-undef\": \"off\" */\n// app.jsx\n // eslint-disable-next-line react/prefer-stateless-function\n\nvar IssueFilter = /*#__PURE__*/function (_React$Component) {\n  _inherits(IssueFilter, _React$Component);\n\n  var _super = _createSuper(IssueFilter);\n\n  function IssueFilter() {\n    _classCallCheck(this, IssueFilter);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(IssueFilter, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, \"\\\"This is a placeholder for the IssueFilter\\\"\");\n    }\n  }]);\n\n  return IssueFilter;\n}(React.Component);\n\nfunction IssueRow(_ref) {\n  var issue = _ref.issue;\n  // reading from the component's properties\n  var issueLocal = issue;\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, issueLocal.id), /*#__PURE__*/React.createElement(\"td\", null, issueLocal.status), /*#__PURE__*/React.createElement(\"td\", null, issueLocal.owner), /*#__PURE__*/React.createElement(\"td\", null, issueLocal.effort), /*#__PURE__*/React.createElement(\"td\", null, issueLocal.created.toDateString()), /*#__PURE__*/React.createElement(\"td\", null, issueLocal.due ? issueLocal.due.toDateString() : \"\"), /*#__PURE__*/React.createElement(\"td\", null, issueLocal.title));\n} // class IssueRow extends React.Component {\n//   render() {\n//\n//   }\n// }\n\n\nfunction IssueTable(_ref2) {\n  var issues = _ref2.issues;\n  // issues passed in from the 'IssuesList' as a prop\n  // > map(issue => 'as' <IssueRow issue={issue} />)\n  var issueRows = issues.map(function (issue) {\n    return /*#__PURE__*/React.createElement(IssueRow, {\n      key: issue.id,\n      issue: issue\n    });\n  });\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"Id\"), /*#__PURE__*/React.createElement(\"th\", null, \"Status\"), /*#__PURE__*/React.createElement(\"th\", null, \"Owner\"), /*#__PURE__*/React.createElement(\"th\", null, \"Effort\"), /*#__PURE__*/React.createElement(\"th\", null, \"Created\"), /*#__PURE__*/React.createElement(\"th\", null, \"Due\"), /*#__PURE__*/React.createElement(\"th\", null, \"Title\"))), /*#__PURE__*/React.createElement(\"tbody\", null, issueRows));\n} // class IssueTable extends React.Component {\n//   render() {\n//   }\n// }\n\n\nvar IssueAdd = /*#__PURE__*/function (_React$Component2) {\n  _inherits(IssueAdd, _React$Component2);\n\n  var _super2 = _createSuper(IssueAdd);\n\n  function IssueAdd() {\n    var _this;\n\n    _classCallCheck(this, IssueAdd);\n\n    // constructor from React.Component\n    _this = _super2.call(this); // setTimeout(() => {\n    //   this.setState({ issues: sampleIssue });\n    // }, 2000);\n\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(IssueAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.issueAdd;\n      var issue = {\n        owner: form.owner.value,\n        title: form.title.value,\n        // 1000(milisecs/sec)*60(secs/min)*60(min/hr)*24(hrs/day)*10(days) => default due date is 10days from now\n        due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10) // status now handled by the addFunction in DB\n        // status: \"New\",\n\n      };\n      this.props.createIssue(issue);\n      var createIssue = this.props.createIssue;\n      createIssue(issue); // clear form\n\n      form.owner.value = \"\";\n      form.title.value = \"\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"form\", {\n        name: \"issueAdd\",\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"owner\",\n        id: \"owner\",\n        placeholder: \"Owner\"\n      }), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"title\",\n        id: \"title\",\n        placeholder: \"Title\"\n      }), /*#__PURE__*/React.createElement(\"button\", {\n        type: \"submit\"\n      }, \"Add\"));\n    }\n  }]);\n\n  return IssueAdd;\n}(React.Component); // IssueList\n\n\nvar IssueList = /*#__PURE__*/function (_React$Component3) {\n  _inherits(IssueList, _React$Component3);\n\n  var _super3 = _createSuper(IssueList);\n\n  function IssueList() {\n    var _this2;\n\n    _classCallCheck(this, IssueList);\n\n    _this2 = _super3.call(this); // calls constructor of React.Component\n    // constructor is the only place where state can directly\n    // > be set on the entity through 'this.state'\n\n    _this2.state = {\n      issues: []\n    }; // createIssue binding to 'this'; when fn is called => 'this' will refer to\n    // > IssueList, otherwise the 'lexical scope' will refer to the function caller\n\n    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));\n    return _this2;\n  } // lifecycle method\n\n\n  _createClass(IssueList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    } // eslint-disable-next-line async\n\n  }, {\n    key: \"loadData\",\n    value: function () {\n      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                query = \"\\n      query{\\n        issueList{\\n          id title created status owner\\n        }\\n      }\\n    \";\n                _context.next = 3;\n                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query);\n\n              case 3:\n                data = _context.sent;\n\n                if (data) {\n                  this.setState({\n                    issues: data.issueList\n                  });\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadData() {\n        return _loadData.apply(this, arguments);\n      }\n\n      return loadData;\n    }()\n  }, {\n    key: \"createIssue\",\n    value: function () {\n      var _createIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(issue) {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                query = \"mutation issueAdd($issue: IssueInputs!){\\n      issueAdd(issue: $issue){\\n        id\\n      }\\n    }\";\n                _context2.next = 3;\n                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query, {\n                  issue: issue\n                });\n\n              case 3:\n                data = _context2.sent;\n\n                if (data) {\n                  this.loadData();\n                }\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function createIssue(_x) {\n        return _createIssue.apply(this, arguments);\n      }\n\n      return createIssue;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var issues = this.state.issues;\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"Issue Tracker\"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(IssueTable, {\n        issues: this.state.issues\n      }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(IssueAdd, {\n        createIssue: this.createIssue\n      }));\n    }\n  }]);\n\n  return IssueList;\n}(React.Component); // create instance of helloWorld\n\n\nvar element = /*#__PURE__*/React.createElement(IssueList, null); // pass in instance of helloWorld as 'element'\n\nReactDOM.render(element, document.querySelector(\"#contents\"));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return graphQLFetch; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar dateRegex = new RegExp('^\\\\d\\\\d\\\\d\\\\d-\\\\d\\\\d-\\\\d\\\\d');\n\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\n\nfunction graphQLFetch(_x) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {\n    var variables,\n        response,\n        body,\n        result,\n        error,\n        details,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(window.Event.UI_API_ENDPOINT, {\n              method: \"post\",\n              headers: {\n                \"content-type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.text();\n\n          case 7:\n            body = _context.sent;\n            result = JSON.parse(body, jsonDateReviver);\n\n            if (result.errors) {\n              error = result.errors[0];\n\n              if (error.extensions.code === 'BAD_USER_INPUT') {\n                details = error.extensions.exception.errors.join('\\n');\n                alert(\"\".concat(error.message, \":\\n \").concat(details));\n              } else {\n                alert(\"\".concat(error.extensions.code, \": \").concat(error.message));\n              }\n            } // end if(result.errors)\n\n\n            return _context.abrupt(\"return\", result.data);\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](1);\n            alert(\"Error in sending data to server: \".concat(_context.t0.message));\n            return _context.abrupt(\"return\", null);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 13]]);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/graphQLFetch.js?");

/***/ })

/******/ });