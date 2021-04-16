import React from "react";
import PropTypes from "prop-types";

import "./DataTables.scss";

import DisplayEntries from "./DisplayEntries";
import Search from "./Search";

const DataTables = ({ data }) => {
  return (
    <div className="dtb">
      <header>
        <DisplayEntries />
        <Search />
      </header>
    </div>
  );
};

DataTables.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTables;
