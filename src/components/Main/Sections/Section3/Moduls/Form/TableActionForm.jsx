import React from 'react';
import ConnectToServer from '../../../../../../APIConnect/ConnectToServer';
import TableEditForm from '../../../../../Forms/TabelEditForm/TableEditForm';
import s from './TableActionForm.module.css';

const TableActionForm = (props) => {

  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0] });

  //Open form submit new data
  const openForm = () => {
    props.toggleBeForm(true)
  }

  //Submitting form data
  const onSubmitForm = (formData) => {
    let newPayment = {
      Customer: "0",
      Data: "0",
      Payment: "0",
      Point: "0"
    }
    console.log(formData)
    newPayment = {...newPayment, ...formData}
    console.log(newPayment)
    props.toggleBeForm(false)
  }

  const setCookieAlex = () => {
    ConnectToServer.addNewPayment({ id: 0 })
  }
  //count pages
  let pageCount = Math.ceil(props.state.totalPaymentsCount / props.state.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }


  return (
    <div>
      <div className={s.controlPanel}>
        <button onClick={openForm} className={s.openButton}>Add {props.state.formName}</button>

        <div className={s.paginationPanel}>
          <span className={s.page}>&lt;PAGE</span>

          {pages.map(p => {
            return <span
              onClick={() => { props.setCurrentPage(p); props.onPageChenged(p) }}
              className={props.state.currentPage === p ? s.active : null}
              key={p}>{p}</span>
          })}

          <span className={s.page}>PAGE&gt;</span>
        </div>

        <button onClick={setCookieAlex} className={s.deleteButton}>Delete {props.state.formName}</button>
      </div>

      <TableEditForm
        onSubmit={onSubmitForm}
        activeForm={props.state.activeForm}
        formName={props.state.formName}
        inputVal={inputVal}
        toggleBeForm={props.toggleBeForm} />

    </div>
  );
}

export default TableActionForm;