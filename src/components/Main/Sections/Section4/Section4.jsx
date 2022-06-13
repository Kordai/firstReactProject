import React from 'react';
import s from './Section4.module.css';
import User from './Moduls/User'
import NewUser from './Moduls/NewUser';

const Section4 = ({state, team, activTeam, toggleBeForm, newUser}) => {

  const qqq = state.filter((f) => { return f.team === team });

  let userPage = qqq.map(
    val => <User state={val} key={val.id} />
  );

  return (    
    <section className={s.u}>
    <span className={s.team}>{team}s</span>
      {userPage}
      {activTeam !== "Service"? <NewUser 
      team = {team} 
      toggleBeForm={toggleBeForm}
      newUser = {newUser}/>: null }
      
    </section>  
  );
}

export default Section4;