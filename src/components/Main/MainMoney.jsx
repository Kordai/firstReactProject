import React from 'react';
import s from './MainMoney.module.css';
import Section3 from './Sections/Section3/Section3';

const MainMoney = (props) => {
  return (
    <main className={s.m}>
      <Section3 state = {props.state.section3} inputUpdate = {props.inputUpdate} addValue = {props.addValue}/>
    </main>
  );
}

export default MainMoney;