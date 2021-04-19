import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../utils";

const Table = ({ labels, data }) => {
  return (
    <table className="dtb-table">
      <thead>
        <tr className="dtb-table-row">
          {labels.map((label) => (
            <th key={generateID()} className="dtb-table-header-cell">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((elt) => (
          <tr key={generateID()} className="dtb-table-row">
            {Object.values(elt).map((value) => (
              <td key={generateID()} className="dtb-table-cell">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
