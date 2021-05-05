"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Display dynamically the number of entries
 * Based on pages, total number of entries, search result
 */
var ShowingEntries = function ShowingEntries(_ref) {
  var minShow = _ref.minShow,
      maxShow = _ref.maxShow,
      totalEntries = _ref.totalEntries,
      isSearching = _ref.isSearching,
      minFilteredShow = _ref.minFilteredShow,
      maxFilteredShow = _ref.maxFilteredShow,
      totalEntriesShow = _ref.totalEntriesShow;

  return _react2.default.createElement(
    "div",
    { className: "dtb-showing" },
    isSearching ? _react2.default.createElement(
      "span",
      null,
      "Showing " + minFilteredShow + " to " + maxFilteredShow + " of " + totalEntriesShow + " entries (filtered from " + totalEntries + " total entries)"
    ) : _react2.default.createElement(
      "span",
      null,
      "Showing " + minShow + " to " + maxShow + " of " + totalEntries + " entries"
    )
  );
};

ShowingEntries.propTypes = {
  minShow: _propTypes2.default.number.isRequired,
  maxShow: _propTypes2.default.number.isRequired,
  totalEntries: _propTypes2.default.number.isRequired,
  minFilteredShow: _propTypes2.default.number.isRequired,
  maxFilteredShow: _propTypes2.default.number.isRequired,
  totalEntriesShow: _propTypes2.default.number.isRequired,
  isSearching: _propTypes2.default.bool
};

exports.default = ShowingEntries;