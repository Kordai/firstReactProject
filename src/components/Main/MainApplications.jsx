import React from 'react';
import s from './MainApplications.module.css';
import Form from './Sections/Section3/Moduls/Form/Form';
import Table from './Sections/Section3/Moduls/Tabel/Table';
import { uAActionCreator, uADActionCreator } from '../../Data/state';

const MainApplications = (props) => {
  const addUAction = (name, value) =>{
    props.dispatch(uAActionCreator(name, value));
  }
  const addUDAction = () =>{
    props.dispatch(uADActionCreator());
  }
  return (
    <main className={s.m}>
      <Table state = {props.state.applications}/>
      <Form state = {props.state.applications} addUAction = {addUAction} addUDAction = {addUDAction}/>
    </main>
  );
}

export default MainApplications;