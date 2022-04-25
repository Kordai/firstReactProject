import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';
import Form from './Moduls/Form/Form';
import { uPActionCreator, uPDActionCreator } from '../../../../Data/state';

const Section3 = (props) => {

  const addUAction = (name, value) =>{
    props.dispatch(uPActionCreator(name, value));
  }
  const addUDAction = () =>{
    props.dispatch(uPDActionCreator());
  }
  
  return (
    <section className={s.s3}>
      <Table state={props.state} />
      <Form state={props.state} addUAction = {addUAction} addUDAction = {addUDAction}/>
      <Module state={props.state} />
    </section>
  );
}

export default Section3;