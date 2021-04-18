import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../utils";

const Table = ({ labels, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {labels.map((label) => (
            <th key={generateID()}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((elt) => (
          <tr key={generateID()}>
            {Object.values(elt).map((value) => (
              <td key={generateID()}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          {labels.map((label) => (
            <td key={generateID()}>{label}</td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
};

Table.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
