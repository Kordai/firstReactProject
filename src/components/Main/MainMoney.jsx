import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './MainMoney.module.css';
import Section3Container from './Sections/Section3/Section3Container';

const MainMoney = () => {
  const navigation = useNavigate();
  return (
    <main className={s.m}>
      <Section3Container navigation = {navigation}/>
    </main>
  );
}

export default MainMoney;