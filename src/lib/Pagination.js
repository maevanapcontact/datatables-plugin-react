import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../utils";

const Pagination = ({
  currentPage,
  totalEntries,
  displayedEntries,
  handleClick,
}) => {
  const nbPages = Math.ceil(totalEntries / displayedEntries);
  const nbPagesArray = new Array(nbPages).fill(0);

  const handlePreviousPage = () => {
    if (currentPage > 1) handleClick(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < nbPages) handleClick(currentPage + 1);
  };

  return (
    <div className="dtb-pagination">
      <button
        type="button"
        onClick={handlePreviousPage}
        className="dtb-pagination-btn"
      >
        Previous
      </button>
      {nbPagesArray.map((elt, index) => (
        <button
          type="button"
          key={generateID()}
          onClick={() => handleClick(index + 1)}
          className="dtb-pagination-btn-nb"
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={handleNextPage}
        className="dtb-pagination-btn"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,
  displayedEntries: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pagination;
