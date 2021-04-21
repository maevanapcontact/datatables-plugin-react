import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../utils";

const Table = ({ labels, data, minShow, maxShow }) => {
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
        {data.map((elt, index) => {
          if (index + 1 >= minShow && index < maxShow) {
            return (
              <tr key={generateID()} className="dtb-table-row">
                {Object.values(elt).map((value) => (
                  <td key={generateID()} className="dtb-table-cell">
                    {value}
                  </td>
                ))}
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  minShow: PropTypes.number.isRequired,
  maxShow: PropTypes.number.isRequired,
};

export default Table;
