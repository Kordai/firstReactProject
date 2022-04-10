import React from 'react';
import s from './Main.module.css';
import Section1 from './Sections/Section1/Section1';
import Section2 from './Sections/Section2/Section2';
import Section3 from './Sections/Section3/Section3';

const Main = () => {
  return (
    <main className={s.m}>
      <Section1/>
      <Section2/>
      <Section3/>
    </main>
  );
}

export default Main;