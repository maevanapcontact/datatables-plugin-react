import React from "react";
import PropTypes from "prop-types";

import "./DataTables.scss";

import DisplayEntries from "./DisplayEntries";
import Search from "./Search";
import Pagination from "./Pagination";

const DataTables = ({ data }) => {
  return (
    <div className="dtb">
      <header>
        <DisplayEntries total={10} />
        <Search data={data} />
      </header>
      <footer>
        <div>
          <span>Showing 1 to 10 of 50 entries</span>
        </div>
        <Pagination total={6} />
      </footer>
    </div>
  );
};

DataTables.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTables;
