import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ total, displayedEntries }) => {
  return <div className="pagination"></div>;
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  displayedEntries: PropTypes.string.isRequired,
};

export default Pagination;
