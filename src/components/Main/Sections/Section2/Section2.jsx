import React from 'react';
import s from './Section2.module.css';
import Module2 from './Moduls/Module2/Module2'

const Section2 = (props) => {

  let dataOptions = props.state.map(
    val => <Module2 state={val} />
  );

  return (
    <section className={s.s2}>
      {dataOptions}
    </section>
  );
}

export default Section2;