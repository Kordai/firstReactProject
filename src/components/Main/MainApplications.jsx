import React from 'react';
import s from './MainApplications.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const MainApplications = (props) => {

  const columns = [
    { dataField: "id", text: "Number" },
    { dataField: "point", text: "Point" },
    { dataField: "coffee", text: "Coffee" },
    { dataField: "milk", text: "Milk" },
    { dataField: "caps350", text: "Cups" },
    { dataField: "sugar", text: "Sugar" },
    { dataField: "date", text: "Date" }
  ]
  return (
    <main className={s.m}>
      <BootstrapTable
        keyField='id'
        data={props.state}
        columns={columns}
        pagination={paginationFactory()}
      />
     
    </main>
  );
}

export default MainApplications;