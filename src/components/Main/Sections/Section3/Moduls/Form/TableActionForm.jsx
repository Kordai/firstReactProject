import React from 'react';
import TableEditForm from '../../../../../Forms/TabelEditForm/TableEditForm';
import s from './TableActionForm.module.css';

const TableActionForm = (props) => {

  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0] });

  //count pages
  let pageCount = Math.ceil(props.state.totalPaymentsCount / props.state.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }


  return (
    <div>
      <div className={s.controlPanel}>
        <button onClick={props.openForm} className={s.openButton}>Add {props.state.formName}</button>

        <div className={s.paginationPanel}>
          <span className={s.page}>&lt;PAGE</span>

          {pages.map(p => {
            return <span
              onClick={() => { props.onPageChenged(p) }}
              className={props.state.currentPage === p ? s.active : null}
              key={p}>{p}</span>
          })}

          <span className={s.page}>PAGE&gt;</span>
        </div>

        <label className={s.count}>Records count: {props.state.totalPaymentsCount}</label>
      </div>

      <TableEditForm
        onUdatePayment={props.onUdatePayment}
        onDeletePayment={props.onDeletePayment}
        closeForm={props.closeForm}
        nameAction={props.state.nameFormAction}
        initialValues={props.state.initialValuesPaymentForm}
        onSubmit={props.onSubmitForm} // прописать условие по обработке данных взависимости от формы name props.onUdatePayment или props.onSubmitForm
        activeForm={props.state.activeForm}
        formName={props.state.formName}
        inputVal={inputVal}
        toggleBeForm={props.toggleBeForm} />

    </div>
  );
}

export default TableActionForm;