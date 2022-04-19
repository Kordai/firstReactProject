import React from 'react';
import s from './MainApplications.module.css';
import Table from './Sections/Tabel2/Table';

const MainApplications = (props) => {
  return (
    <main className={s.m}>
      <Table/>
    </main>
  );
}

export default MainApplications;