import React from "react";
import PropTypes from "prop-types";

const Search = ({ data }) => {
  return (
    <div className="dtb-search">
      <label htmlFor="dtb-search">{`Search: `}</label>
      <input type="text" id="dtb-search" name="dtb-search" />
    </div>
  );
};

Search.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Search;
