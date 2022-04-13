import React from 'react';
import s from './Main.module.css';
import Section1 from './Sections/Section1/Section1';
import Section2 from './Sections/Section2/Section2';

const Main = (props) => {
  return (
    <main className={s.m}>
      <Section1 state = {props.state.section1}/>
      <Section2 state = {props.state.section2}/>
    </main>
  );
}

export default Main;