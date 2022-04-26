import React from 'react';
import s from './MainMoney.module.css';
import Section3Container from './Sections/Section3/Section3Container';

const MainMoney = (props) => {
  return (
    <main className={s.m}>
      <Section3Container store = {props.store}/>
    </main>
  );
}

export default MainMoney;