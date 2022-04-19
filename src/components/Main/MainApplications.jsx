import React from 'react';
import s from './MainApplications.module.css';
import Table from './Sections/Section3/Moduls/Tabel/Table';

const MainApplications = (props) => {
  return (
    <main className={s.m}>
      <Table/>
    </main>
  );
}

export default MainApplications;