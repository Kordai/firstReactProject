import React from 'react';
import s from './Section2.module.css';
import Module2 from './Moduls/Module2/Module2'

const Section2 = () => {
  return (
    <section className={s.s2}>
      <Module2 />
      <Module2 />
    </section>
  );
}

export default Section2;