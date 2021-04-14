import React from "react";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  return <table className="table"></table>;
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Table;
