import React from "react";
import PropTypes from "prop-types";
import "./DataTables.scss";
/*
 * Display dynamically the number of entries
 * Based on pages, total number of entries, search result
 */

const ShowingEntries = ({
  minShow,
  maxShow,
  totalEntries,
  isSearching,
  minFilteredShow,
  maxFilteredShow,
  totalEntriesShow
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "dtb-showing"
  }, isSearching ? /*#__PURE__*/React.createElement("span", null, `Showing ${minFilteredShow} to ${maxFilteredShow} of ${totalEntriesShow} entries (filtered from ${totalEntries} total entries)`) : /*#__PURE__*/React.createElement("span", null, `Showing ${minShow} to ${maxShow} of ${totalEntries} entries`));
};

ShowingEntries.propTypes = {
  minShow: PropTypes.number.isRequired,
  maxShow: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,
  minFilteredShow: PropTypes.number.isRequired,
  maxFilteredShow: PropTypes.number.isRequired,
  totalEntriesShow: PropTypes.number.isRequired,
  isSearching: PropTypes.bool
};
export default ShowingEntries;