import React from 'react';
import s from './MainApplications.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const MainApplications = (props) => {
  if (props.state.data.length === 0) {
    props.setApplication([
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 1, point: "Mart1", coffee: 1, milk: 2, cups: 200, sugar: 2, data: "12-10-2021" },
        { id: 2, point: "Mart2", coffee: 1, milk: 2, cups: 300, sugar: 2, data: "13-10-2021" }
        ]
    );
  }
  const columns = [
    { dataField: "id", text: "Number" },
    { dataField: "point", text: "Point" },
    { dataField: "coffee", text: "Coffee" },
    { dataField: "milk", text: "Milk" },
    { dataField: "cups", text: "Cups" },
    { dataField: "sugar", text: "Sugar" },
    { dataField: "data", text: "Data" }
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