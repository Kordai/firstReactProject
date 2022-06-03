import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Main.module.css';
import Section1Container from './Sections/Section1/Section1Container';
import Section2Container from './Sections/Section2/Section2Container';

const Main = (props) => {
  const navigation = useNavigate();
  return (
    <main className={s.m}>
      <Section1Container navigation = {navigation}/>
      <Section2Container navigation = {navigation}/>
    </main>
  );
}

export default Main;