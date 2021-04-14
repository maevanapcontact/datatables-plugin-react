import React from "react";

import DataTables from "./lib/DataTables";
import { simpleExample } from "./examples";

const App = () => (
  <div className="app">
    <DataTables data={simpleExample} />
  </div>
);

export default App;
