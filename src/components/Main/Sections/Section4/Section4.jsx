import React from 'react';
import s from './Section4.module.css';
import User from './Moduls/User'

const Section4 = (props) => {

  let userPage = props.state.map(
    val => <User state={val} />   
  );

  return (
    <section className={s.u}>
      {userPage}
    </section>
  );
}

export default Section4;