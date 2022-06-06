import React from 'react';
import s from './MainApplications.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import DeliveryEditForm from '../Forms/DeliveryEditForm/DeliveryEditForm';

const MainApplications = (props) => {

  const buttonGroup = (cell, row, rowIndex, formatExtraData) => {
    if (props.team === "Service") {
      return (<>
        <div >
          <button className={row.accepted==="false"? s.accept:s.notVisible}>
          Accept
          </button>
          <button className={row.accepted==="true"&&row.completed==="false"? s.accept:s.notVisible}>
          Delivery
          </button>
        </div>
      </>
      )
    } else {
      return (<>
        <div >
          <button className={row.accepted==="false"? s.btnNew:s.notVisible}
            onClick={() => {
              props.openNewForm()
            }}
          >
          </button>
          <button className={row.accepted==="false"? s.btnEdit:s.notVisible}
            onClick={() => {
              props.openEditForm(row)
            }}
          >
          </button>
          <button className={row.accepted==="false"? s.btnDelete:s.notVisible}
            onClick={() => {
              props.deleteApplications(row.id)
            }}
          >
          </button>
        </div>
      </>
      )
    }
  };

  let inputVal = [
    "point",
    "coffee",
    "milk",
    "caps350",
    "sugar",
    "id_accept"
  ]

  const columns = [
    { dataField: "id", text: "Number", sort: true },
    { dataField: "point", text: "Point", sort: true },
    { dataField: "coffee", text: "Coffee", sort: true },
    { dataField: "milk", text: "Milk", sort: true },
    { dataField: "caps350", text: "Cups", sort: true },
    { dataField: "sugar", text: "Sugar", sort: true },
    { dataField: "date", text: "Date", sort: true },
    { dataField: "actions", text: "Actions", isDummyField: true, formatter: buttonGroup }
  ]

  return (
    <main className={s.m}>
      <BootstrapTable
        keyField='id'
        data={props.state.data}
        columns={columns}
        pagination={paginationFactory()}
      />
      <DeliveryEditForm
        closeForm={props.closeForm}
        nameAction={props.state.nameFormAction}
        initialValues={props.state.initialValuesForm}
        onSubmit={props.state.nameFormAction === "New" ? props.onSubmitForm : props.onUdateDelivery}
        activeForm={props.state.activeForm}
        inputVal={inputVal}
      />
    </main>
  );
}

export default MainApplications;