import React from 'react';
import s from './MainApplications.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from "react-bootstrap";

const MainApplications = (props) => {

  const linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (      
      <Button
        onClick={() => {
          console.log(cell)
          console.log(row)
          console.log(rowIndex)
          console.log(formatExtraData)
        }}
      >
        Follow
      </Button>
    );
  };

  const columns = [
    { dataField: "id", text: "Number", sort: true },
    { dataField: "point", text: "Point", sort: true },
    { dataField: "coffee", text: "Coffee", sort: true },
    { dataField: "milk", text: "Milk", sort: true },
    { dataField: "caps350", text: "Cups", sort: true },
    { dataField: "sugar", text: "Sugar", sort: true },
    { dataField: "date", text: "Date", sort: true },
    { dataField: "actions", text: "Actions", isDummyField: true, formatter: linkFollow }
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