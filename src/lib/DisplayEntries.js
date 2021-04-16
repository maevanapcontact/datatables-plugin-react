import React from "react";
import PropTypes from "prop-types";

const DisplayEntries = ({ total }) => {
  return (
    <div className="dtb-entries">
      <label for="dtb-entries-select">{`Show `}</label>
      <select name="dtb-entries" id="dtb-entries-select">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
      </select>
      <span>{` entries`}</span>
    </div>
  );
};

DisplayEntries.propTypes = {
  total: PropTypes.number.isRequired,
};

export default DisplayEntries;
