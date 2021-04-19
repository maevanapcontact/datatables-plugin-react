import React from "react";
import PropTypes from "prop-types";

import "./DataTables.scss";

const ShowingEntries = ({ minShow, maxShow, totalEntries }) => {
  return (
    <div className="dtb-showing">
      <span>{`Showing ${minShow} to ${maxShow} of ${totalEntries} entries`}</span>
    </div>
  );
};

ShowingEntries.propTypes = {
  minShow: PropTypes.number.isRequired,
  maxShow: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,
};

export default ShowingEntries;
