import React from 'react';
import s from './MainApplications.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';

const MainApplications = (props) => {  
  if (Object.keys(props.state).length === 0 && props.state.constructor === Object) {
    props.setApplication({
      formName: "Application",
      inputMark: {
          Point: "",
          Coffee: "",
          Milk: "",
          Cups: "",
          Sugar: "",
          Data: ""
      },
      headTable: ["Naber", "Point", "Coffee", "Milk", "Cups", "Sugar", "Data"],
      data: [
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},
          {id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021"},

          {id: 2, point: "Mart2", coffee: 1, milk: 2, cups: 300, sugar: 2, data: "13-10-2021"}
          // ["3", "GasStation1", 1, 2, 100, 2, "13-10-2021"],
          // ["4", "GasStation2", 1, 2, 100, 2, "14-10-2021"],
          // ["5", "Mart1", 1, 2, 100, 2, "15-10-2021"],
          // ["6", "Mart2", 1, 2, 100, 2, "16-10-2021"],
          // ["7", "GasStation1", 1, 2, 50, 2, "16-10-2021"],
          // ["8", "GasStation2", 1, 2, 50, 2, "18-10-2021"],
          // ["9", "Mart1", 1, 2, 200, 2, "01-11-2021"],
          // ["10", "Mart2", 1, 2, 200, 2, "12-11-2021"],
          // ["11", "GasStation1", 1, 2, 200, 2, "13-11-2021"],
          // ["12", "GasStation2", 1, 2, 50, 2, "18-12-2021"],
          // ["13", "Mart1", 1, 2, 200, 2, "01-01-2022"],
          // ["14", "Mart2", 1, 2, 200, 2, "12-01-2022"],
          // ["15", "GasStation1", 1, 2, 200, 2, "13-01-2022"]
      ]
  });
  }
  const columns = [
    { dataField: "id", text: "Number"},
    { dataField: "point", text: "Point"},
    { dataField: "coffee", text: "Coffee"},
    { dataField: "milk", text: "Milk"},
    { dataField: "cups", text: "Cups"},
    { dataField: "sugar", text: "Sugar"},
    { dataField: "data", text: "Data"}
  ]
  return (
    <main className={s.m}>
<BootstrapTable
keyField='id'
data={props.state.data}
columns={columns}
pagination={paginationFactory()}
/>
    </main>
  );
}

export default MainApplications;