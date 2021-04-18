import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DataTables.scss";

import DisplayEntries from "./DisplayEntries";
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

const DataTables = ({ labels, data }) => {
  const [entriesShown, setEntriesShown] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage);

  return (
    <div className="dtb">
      <header>
        <DisplayEntries value={entriesShown} handleChange={setEntriesShown} />
        <Search data={data} />
      </header>
      <Table labels={labels} data={data} />
      <footer>
        <div>
          <span>{`Showing 1 to ${entriesShown} of ${data.length} entries`}</span>
        </div>
        <Pagination
          totalEntries={data.length}
          displayedEntries={entriesShown}
          handleClick={setCurrentPage}
          currentPage={currentPage}
        />
      </footer>
    </div>
  );
};

DataTables.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTables;
