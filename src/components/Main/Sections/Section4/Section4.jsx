import React from 'react';
import s from './Section4.module.css';
import User from './Moduls/User'

const Section4 = (props) => {  

  return (
    <section className={s.u}>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </section>
  );
}

export default Section4;