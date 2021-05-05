import React from "react";
import PropTypes from "prop-types";
import { generateID } from "../utils";
/*
 * Table displaying the entries
 */

const Table = ({
  labels,
  data,
  minShow,
  maxShow,
  handleSort,
  sort,
  sortedData
}) => {
  const {
    column,
    isDesc
  } = sort;
  return /*#__PURE__*/React.createElement("table", {
    className: "dtb-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "dtb-table-header-row"
  }, labels.map(label => /*#__PURE__*/React.createElement("th", {
    key: generateID(),
    className: "dtb-table-header-cell",
    onClick: () => handleSort(label.value)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dtb-table-header-cell-content"
  }, /*#__PURE__*/React.createElement("span", null, label.text), /*#__PURE__*/React.createElement("div", {
    className: "dtb-table-header-cell-icons"
  }, /*#__PURE__*/React.createElement("div", {
    className: column === label.value ? !isDesc ? "dtb-table-arrow-up active" : "dtb-table-arrow-up inactive" : "dtb-table-arrow-up"
  }), /*#__PURE__*/React.createElement("div", {
    className: column === label.value ? isDesc ? "dtb-table-arrow-down active" : "dtb-table-arrow-down inactive" : "dtb-table-arrow-down"
  }))))))), /*#__PURE__*/React.createElement("tbody", null, sortedData.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dtb-table-row-nomatch",
    colspan: labels.length
  }, "No matching records found")), data.map((elt, index) => {
    if (index + 1 >= minShow && index < maxShow) {
      return /*#__PURE__*/React.createElement("tr", {
        key: generateID(),
        className: "dtb-table-row"
      }, Object.values(elt).map((value, j) => /*#__PURE__*/React.createElement("td", {
        key: generateID(),
        className: j === 0 ? "dtb-table-cell first-cell" : "dtb-table-cell"
      }, value)));
    }

    return null;
  })));
};

Table.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  sortedData: PropTypes.array.isRequired,
  sort: PropTypes.object.isRequired,
  minShow: PropTypes.number.isRequired,
  maxShow: PropTypes.number.isRequired,
  handleSort: PropTypes.func.isRequired
};
export default Table;