import React from "react";
import PropTypes from "prop-types";
/*
 * Select element to chose the number of rows to display
 */

const DisplayEntries = ({
  value,
  handleChange
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "dtb-entries"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "dtb-entries-select"
  }, `Show `), /*#__PURE__*/React.createElement("select", {
    name: "dtb-entries",
    id: "dtb-entries-select",
    value: value,
    onChange: evt => handleChange(evt)
  }, /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: "100"
  }, "100")), /*#__PURE__*/React.createElement("span", null, ` entries`));
};

DisplayEntries.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default DisplayEntries;