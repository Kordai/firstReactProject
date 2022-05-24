import React from 'react';
import s from './Section4.module.css';
import User from './Moduls/User'

const Section4 = (props) => {

  const qqq = props.state.filter((f) => { return f.team === props.team });

  let userPage = qqq.map(
    val => <User state={val} key={val.id} />
  );

  return (<>
    
    <section className={s.u}>
    <span className={s.team}>{props.team}</span>
      {userPage}
    </section>
  </>
  );
}

export default Section4;