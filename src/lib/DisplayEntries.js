import React from "react";
import PropTypes from "prop-types";

const DisplayEntries = ({ total }) => {
  return <div className="entries"></div>;
};

DisplayEntries.propTypes = {
  total: PropTypes.number.isRequired,
};

export default DisplayEntries;
