import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DataTables.scss";

import DisplayEntries from "./DisplayEntries";
import Search from "./Search";
import Table from "./Table";
import ShowingEntries from "./ShowingEntries";
import Pagination from "./Pagination";

const DataTables = ({ labels, data }) => {
  const [entriesShown, setEntriesShown] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage);

  return (
    <div className="dtb">
      <DisplayEntries value={entriesShown} handleChange={setEntriesShown} />
      <Search data={data} />
      <Table labels={labels} data={data} />
      <ShowingEntries
        minShow={1}
        maxShow={entriesShown}
        totalEntries={data.length}
      />
      <Pagination
        totalEntries={data.length}
        displayedEntries={entriesShown}
        handleClick={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

DataTables.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTables;
