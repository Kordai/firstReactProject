import React from 'react';
import TableEditForm from '../../../../../Forms/TabelEditForm/TableEditForm';
import s from './TableActionForm.module.css';

const TableActionForm = ({state, openForm, onPageChenged, onDeletePayment, closeForm, onSubmitForm, onUdatePayment, toggleBeForm}) => {

  let inputVal = state.headTable.filter((f) => { return f !== state.headTable[0] });

  //count pages
  let pageCount = Math.ceil(state.totalPaymentsCount / state.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }


  return (
    <div>
      <div className={s.controlPanel}>
        <button onClick={openForm} className={s.openButton}>Add {state.formName}</button>

        <div className={s.paginationPanel}>
          <span className={s.page}>&lt;PAGE</span>

          {pages.map(p => {
            return <span
              onClick={() => { onPageChenged(p) }}
              className={state.currentPage === p ? s.active : null}
              key={p}>{p}</span>
          })}

          <span className={s.page}>PAGE&gt;</span>
        </div>

        <label className={s.count}>Records count: {state.totalPaymentsCount}</label>
      </div>

      <TableEditForm        
        onDeletePayment={onDeletePayment}
        closeForm={closeForm}
        nameAction={state.nameFormAction}
        initialValues={state.initialValuesPaymentForm}
        onSubmit={state.nameFormAction === "Add"? onSubmitForm : onUdatePayment} 
        activeForm={state.activeForm}
        formName={state.formName}
        inputVal={inputVal}
        toggleBeForm={toggleBeForm} />

    </div>
  );
}

export default TableActionForm;