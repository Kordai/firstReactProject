import React from 'react';
import s from './Main.module.css';
import Section1Container from './Sections/Section1/Section1Container';
import Section2Container from './Sections/Section2/Section2Container';

const Main = (props) => {
  return (
    <main className={s.m}>
      <Section1Container />
      <Section2Container />
    </main>
  );
}

export default Main;