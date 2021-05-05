"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Table displaying the entries
 */
var Table = function Table(_ref) {
  var labels = _ref.labels,
      data = _ref.data,
      minShow = _ref.minShow,
      maxShow = _ref.maxShow,
      handleSort = _ref.handleSort,
      sort = _ref.sort,
      sortedData = _ref.sortedData;
  var column = sort.column,
      isDesc = sort.isDesc;


  return _react2.default.createElement(
    "table",
    { className: "dtb-table" },
    _react2.default.createElement(
      "thead",
      null,
      _react2.default.createElement(
        "tr",
        { className: "dtb-table-header-row" },
        labels.map(function (label) {
          return _react2.default.createElement(
            "th",
            {
              key: (0, _utils.generateID)(),
              className: "dtb-table-header-cell",
              onClick: function onClick() {
                return handleSort(label.value);
              }
            },
            _react2.default.createElement(
              "div",
              { className: "dtb-table-header-cell-content" },
              _react2.default.createElement(
                "span",
                null,
                label.text
              ),
              _react2.default.createElement(
                "div",
                { className: "dtb-table-header-cell-icons" },
                _react2.default.createElement("div", {
                  className: column === label.value ? !isDesc ? "dtb-table-arrow-up active" : "dtb-table-arrow-up inactive" : "dtb-table-arrow-up"
                }),
                _react2.default.createElement("div", {
                  className: column === label.value ? isDesc ? "dtb-table-arrow-down active" : "dtb-table-arrow-down inactive" : "dtb-table-arrow-down"
                })
              )
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      "tbody",
      null,
      sortedData.length === 0 && _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          { className: "dtb-table-row-nomatch", colspan: labels.length },
          "No matching records found"
        )
      ),
      data.map(function (elt, index) {
        if (index + 1 >= minShow && index < maxShow) {
          return _react2.default.createElement(
            "tr",
            { key: (0, _utils.generateID)(), className: "dtb-table-row" },
            Object.values(elt).map(function (value, j) {
              return _react2.default.createElement(
                "td",
                {
                  key: (0, _utils.generateID)(),
                  className: j === 0 ? "dtb-table-cell first-cell" : "dtb-table-cell"
                },
                value
              );
            })
          );
        }
        return null;
      })
    )
  );
};

Table.propTypes = {
  labels: _propTypes2.default.array.isRequired,
  data: _propTypes2.default.array.isRequired,
  sortedData: _propTypes2.default.array.isRequired,
  sort: _propTypes2.default.object.isRequired,
  minShow: _propTypes2.default.number.isRequired,
  maxShow: _propTypes2.default.number.isRequired,
  handleSort: _propTypes2.default.func.isRequired
};

exports.default = Table;