import React from 'react';
import ConnectToServer from '../../../../../../APIConnect/ConnectToServer';
import TableEditForm from '../../../../../Forms/TabelEditForm/TableEditForm';
import s from './TableActionForm.module.css';

const TableActionForm = (props) => {

  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0] });

  //Open form submit new data
  const openForm = () => {
    props.toggleBeNameForm("Add");
    props.toggleBeForm(true)
  }
  
  //Submitting form data
  const onSubmitForm = (formData) => {
    let newPayment = {
      Customer: "0",
      Date: "0",
      Payment: 0,
      Point: "0"
    }    
    
    newPayment = {...newPayment, ...formData}
    //Необходимо переделать в BLL
    ConnectToServer.addNewPayment(newPayment).then(data => {
      if (data.success === 1) {
        props.getPayments(1, 10);
      }
    })

    props.toggleBeForm(false)
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
              onClick={() => {props.onPageChenged(p)}}
              className={props.state.currentPage === p ? s.active : null}
              key={p}>{p}</span>
          })}

          <span className={s.page}>PAGE&gt;</span>
        </div>

        <label className={s.count}>Records count: {props.state.totalPaymentsCount}</label>
      </div>

      <TableEditForm
        nameAction = {props.state.nameFormAction}
        initialValues={props.state.initialValuesPaymentForm}
        onSubmit={onSubmitForm}
        activeForm={props.state.activeForm}
        formName={props.state.formName}
        inputVal={inputVal}        
        toggleBeForm={props.toggleBeForm}/>

    </div>
  );
}

export default TableActionForm;