import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ total }) => {
  const totalArray = new Array(total).fill(0);

  return (
    <div className="pagination">
      <button type="button">Previous</button>
      {totalArray.map((elt, index) => (
        <button
          type="button"
          key={"_" + Math.random().toString(36).substr(2, 9)}
        >
          {index + 1}
        </button>
      ))}
      <button type="button">Next</button>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Pagination;
