import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';
import TableActionForm from './Moduls/Form/TableActionForm';


const Section3 = (props) => {

  return (
      <section className={s.s3} >
        <Table state={props.state} />
        <TableActionForm state={props.state} 
              onPageChenged = {props.onPageChenged} 
              setCurrentPage = {props.setCurrentPage} 
              addUpdate={props.addUpdate} 
              addUpdateText={props.addUpdateText} 
              toggleBeForm = {props.toggleBeForm}/>
        <Module state={props.state} />
      </section>
    )  
}
export default Section3;