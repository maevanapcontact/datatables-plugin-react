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

  const minShow = currentPage === 1 ? 1 : (currentPage - 1) * entriesShown + 1;
  const maxShow =
    currentPage * entriesShown < data.length
      ? currentPage * entriesShown
      : data.length;

  const handleEntriesChange = (evt) => {
    setEntriesShown(parseInt(evt.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="dtb">
      <DisplayEntries value={entriesShown} handleChange={handleEntriesChange} />
      <Search data={data} />
      <Table labels={labels} data={data} minShow={minShow} maxShow={maxShow} />
      <ShowingEntries
        minShow={minShow}
        maxShow={maxShow}
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
