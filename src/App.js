import React from "react";

import DataTables from "./lib/DataTables";
import { exampleLabels, exampleLoopData } from "./examples";

const App = () => (
  <div className="app">
    <DataTables labels={exampleLabels} data={exampleLoopData} />
  </div>
);

export default App;
