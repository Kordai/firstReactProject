import React from 'react';
import s from './MainMoney.module.css';
import Table from './Sections/Tabel/Table';

const MainMoney = (props) => {
  return (
    <main className={s.m}>
      <Table/>
    </main>
  );
}

export default MainMoney;