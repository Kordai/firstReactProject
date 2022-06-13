import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';
import TableActionForm from './Moduls/Form/TableActionForm';


const Section3 = ({team, state, openEditForm, onUdatePayment, onDeletePayment, onSubmitForm, openForm, closeForm, onPageChenged, toggleBeForm, toggleBeNameForm}) => {

  if (team === "Service") {
    return <div> 
      <span className={s.spanService}> Access is limited </span>
    </div>
  }

  return (
    <section className={s.s3} >
      <Table
        state={state}
        openEditForm={openEditForm} />

      <TableActionForm
        onUdatePayment={onUdatePayment}
        onDeletePayment={onDeletePayment}
        state={state}
        onSubmitForm={onSubmitForm}
        openForm={openForm}
        closeForm={closeForm}
        onPageChenged={onPageChenged}
        toggleBeForm={toggleBeForm}
        toggleBeNameForm={toggleBeNameForm} />
      <Module state={state} />
    </section>
  )
}
export default Section3;