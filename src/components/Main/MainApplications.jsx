import React from 'react';
import s from './MainApplications.module.css';
import Form from './Sections/Section3/Moduls/Form/Form';
import Table from './Sections/Section3/Moduls/Tabel/Table';

const MainApplications = (props) => {
  return (
    <main className={s.m}>
      <Table state = {props.state.applications}/>
      <Form state = {props.state.applications} inputUpdate = {props.inputUpdate}/>
    </main>
  );
}

export default MainApplications;