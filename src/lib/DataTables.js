import React from "react";
import PropTypes from "prop-types";

import "./DataTables.scss";

const DataTables = ({ data }) => {
  return <div className="datatables"></div>;
};

DataTables.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTables;
