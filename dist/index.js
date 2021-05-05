"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./DataTables.scss");

var _utils = require("./utils");

var _DisplayEntries = require("./DisplayEntries");

var _DisplayEntries2 = _interopRequireDefault(_DisplayEntries);

var _Search = require("./Search");

var _Search2 = _interopRequireDefault(_Search);

var _Table = require("./Table");

var _Table2 = _interopRequireDefault(_Table);

var _ShowingEntries = require("./ShowingEntries");

var _ShowingEntries2 = _interopRequireDefault(_ShowingEntries);

var _Pagination = require("./Pagination");

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Main component of the library
 * DataTable base element
 */
var DataTables = function DataTables(_ref) {
  var labels = _ref.labels,
      data = _ref.data;

  var initialState = data;

  var _useState = (0, _react.useState)(10),
      _useState2 = _slicedToArray(_useState, 2),
      entriesShown = _useState2[0],
      setEntriesShown = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = (0, _react.useState)(initialState),
      _useState6 = _slicedToArray(_useState5, 2),
      sortedData = _useState6[0],
      setSortedData = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSearching = _useState8[0],
      setIsSearching = _useState8[1];

  var _useState9 = (0, _react.useState)({
    column: "",
    isDesc: true
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      sort = _useState10[0],
      setSort = _useState10[1];

  var minShow = currentPage === 1 ? 1 : (currentPage - 1) * entriesShown + 1;
  var maxShow = currentPage * entriesShown < data.length ? currentPage * entriesShown : data.length;
  var minFilteredShow = currentPage === 1 ? sortedData.length > 0 ? 1 : 0 : (currentPage - 1) * entriesShown + 1;
  var maxFilteredShow = currentPage * entriesShown < sortedData.length ? currentPage * entriesShown : sortedData.length;

  // Handle the changes of displayed entries
  var handleEntriesChange = function handleEntriesChange(evt) {
    setEntriesShown(parseInt(evt.target.value));
    setCurrentPage(1);
  };

  // Handle the sorting data (column + asc / desc)
  var handleSort = function handleSort(label) {
    if (sort.column === label) {
      setSort(_extends({}, sort, {
        isDesc: !sort.isDesc
      }));
    } else {
      setSort({
        column: label,
        isDesc: false
      });
    }

    var sorted = sorting(label);
    setSortedData(sorted);
  };

  // Sorting system based on label
  var sorting = function sorting(label) {
    var sorted = sortedData.sort(function (a, b) {
      var labelA = (0, _utils.normalizeText)(a[label]);
      var labelB = (0, _utils.normalizeText)(b[label]);

      if (sort.isDesc) {
        if (labelA < labelB) return -1;
        if (labelA > labelB) return 1;
      } else {
        if (labelA < labelB) return 1;
        if (labelA > labelB) return -1;
      }

      return 0;
    });

    return sorted;
  };

  return _react2.default.createElement(
    "div",
    { className: "dtb" },
    _react2.default.createElement(_DisplayEntries2.default, { value: entriesShown, handleChange: handleEntriesChange }),
    _react2.default.createElement(_Search2.default, {
      data: data,
      handleDisplayedData: setSortedData,
      handleIsSearching: setIsSearching
    }),
    _react2.default.createElement(_Table2.default, {
      labels: labels,
      data: sortedData,
      minShow: minShow,
      maxShow: maxShow,
      handleSort: handleSort,
      sort: sort,
      sortedData: sortedData
    }),
    _react2.default.createElement(_ShowingEntries2.default, {
      minShow: minShow,
      maxShow: maxShow,
      totalEntries: data.length,
      isSearching: isSearching,
      minFilteredShow: minFilteredShow,
      maxFilteredShow: maxFilteredShow,
      totalEntriesShow: sortedData.length
    }),
    _react2.default.createElement(_Pagination2.default, {
      totalEntries: sortedData.length,
      displayedEntries: entriesShown,
      handleClick: setCurrentPage,
      currentPage: currentPage
    })
  );
};

DataTables.propTypes = {
  labels: _propTypes2.default.array.isRequired,
  data: _propTypes2.default.array.isRequired
};

exports.default = DataTables;