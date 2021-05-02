import React from "react";

import DataTables from "./lib/DataTables";
import { exampleLabels, exampleData } from "./examples";

const App = () => {
  return (
    <div className="app">
      <DataTables labels={exampleLabels} data={exampleData} />
    </div>
  );
};

export default App;
