import React from "react";
import PropTypes from "prop-types";

const Search = ({ data }) => {
  console.log(data);

  return (
    <div className="dtb-search">
      <label htmlFor="dtb-search">{`Search: `}</label>
      <input type="text" id="dtb-search" name="dtb-search" />
    </div>
  );
};

Search.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Search;
