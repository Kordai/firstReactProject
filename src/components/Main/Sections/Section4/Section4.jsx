import React from 'react';
import s from './Section4.module.css';
import User from './Moduls/User'

const Section4 = (props) => {

  console.log(props.state);
  console.log(props.team);
 //let qqq = props.state.map(val => val.team === props.team ? val:[]);

  

 const qqq = props.state.filter((f) => { return f.team === props.team });

  let userPage = qqq.map(
    val => <User state={val} key = {val.id} />   
  );

  return (
    <section className={s.u}>
      {userPage}
    </section>
  );
}

export default Section4;