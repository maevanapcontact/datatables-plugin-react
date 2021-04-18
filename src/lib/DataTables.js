import React from "react";
import PropTypes from "prop-types";

import "./DataTables.scss";

import DisplayEntries from "./DisplayEntries";
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

const DataTables = ({ labels, data }) => {
  return (
    <div className="dtb">
      <header>
        <DisplayEntries total={10} />
        <Search data={data} />
      </header>
      <Table labels={labels} data={data} />
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
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTables;
