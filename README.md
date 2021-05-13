# DataTable plugin for React

A ready-to-use DataTable component for React projects. It adds features to manipulate data easily.

## Features

- Pagination with different number of displayed entries (10 / 25 / 50 / 100)
- Searching accross all entries
- Sorting by columns (ASC or DESC)
- Dynamic information about number of displayed data

## Get started

### Download

[datatables-plugin-react](https://www.npmjs.com/package/datatables-plugin-react)

### Requirements

- React 17.0.2+

### Installation

- using NPM
  `npm install datatables-plugin-react`

- using yarn
  `yarn add datatables-plugin-react`

### Usage

To use the plugin, import it in your React component.
It needs 2 props to work: `labels` and `data`

_MyComponent.js_

```javascript
import DataTables from "datatables-plugin-react";
import { labels, data } from "./examples";

const MyComponent = () => {
  <DataTable labels={labels} data={data} />;
};
```

_examples.js_

```javascript
const exampleLabels = [
  { text: "First Name", value: "firstName" },
  { text: "Last Name", value: "lastName" },
  { text: "Start Date", value: "startDate" },
  { text: "Department", value: "department" },
  { text: "Date of Birth", value: "dateOfBirth" },
  { text: "Street", value: "street" },
  { text: "City", value: "city" },
  { text: "State", value: "state" },
  { text: "Zip Code", value: "zipCode" },
];

const exampleData = [
  {
    firstName: "John",
    lastName: "Doe",
    startDate: "04/14/2021",
    department: "Marketing",
    dateOfBirth: "01/01/1990",
    street: "Main Street",
    city: "NY",
    state: "AL",
    zipCode: "01800",
  },
  {
    firstName: "Elisa",
    lastName: "Tyrel",
    startDate: "03/02/2020",
    department: "Marketing",
    dateOfBirth: "01/25/1988",
    street: "Helia Street",
    city: "San Francisco",
    state: "AK",
    zipCode: "85699",
  },
];

export { exampleLabels, exampleData };
```

### API

DataTable needs 2 props:

- `data` that contains the data for the rows
- `labels` that defines the name of the columns

The keys of each object element in the `data` array should be the same as the `value` keys of each label element of the `labels` array.

_DataTable props_

- `data` array of objects containing a single row
- `labels` array of objects with the labels of the columns

_data_

```javascript
[
  {
    columnName1: "text1",
    columnName2: "text2",
    columnName3: "text3",
  },
  {
    columnName1: "text1",
    columnName2: "text2",
    columnName3: "text3",
  },
];
```

_labels_

```javascript
[
  { text: "Column Name 1", value: "columnName1" },
  { text: "Column Name 2", value: "columnName2" },
  { text: "Column Name 3", value: "columnName3" },
];
```
