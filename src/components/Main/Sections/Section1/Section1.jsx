import React from 'react';
import s from './Section1.module.css';
import Module1 from './Moduls/Module1/Module1'
import Module2 from './Moduls/Module2/Module2'
import Module3 from './Moduls/Module3/Module3'
import Module4 from './Moduls/Module4/Module4'

const Section1 = () => {
  return (
    <section className={s.s1}>
      {/* Комент */}
      <Module1/>
      <Module2/>
      <Module3/>
      <Module4/>
    </section>
  );
}

export default Section1;