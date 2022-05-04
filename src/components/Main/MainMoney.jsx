import React from 'react';
import s from './MainMoney.module.css';
import Section3Container from './Sections/Section3/Section3Container';

const MainMoney = () => {
  return (
    <main className={s.m}>
      <Section3Container/>
    </main>
  );
}

export default MainMoney;