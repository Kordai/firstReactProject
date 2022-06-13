import React from 'react';
import s from './Applications.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "./styles.css";

const Applications = ({state}) => {

    const columns = [
        { dataField: "id", text: "Number", sort: true },
        { dataField: "point", text: "Point", sort: true },
        { dataField: "coffee", text: "Coffee", sort: true },
        { dataField: "milk", text: "Milk", sort: true },
        { dataField: "caps350", text: "Cups", sort: true },
        { dataField: "sugar", text: "Sugar", sort: true },
        { dataField: "date", text: "Date", sort: true }
    ]

    return <>
        <div className={s.applications}>
            <span className={s.teguser}>Delivery</span>
            <BootstrapTable
                keyField='id'
                data={state}
                columns={columns}
                pagination={paginationFactory()}
                classes={s.table + " table-sm"}
            />
        </div>
    </>
}

export default Applications