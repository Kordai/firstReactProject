import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';
import TableActionForm from './Moduls/Form/TableActionForm';


const Section3 = (props) => {

  return (
    <section className={s.s3} >
      <Table
        state={props.state}         
        openEditForm={props.openEditForm}/>

      <TableActionForm       
        state={props.state}        
        onPageChenged={props.onPageChenged}
        toggleBeForm={props.toggleBeForm}
        toggleBeNameForm={props.toggleBeNameForm} />
      <Module state={props.state} />
    </section>
  )
}
export default Section3;