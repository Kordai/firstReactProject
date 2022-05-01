import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../../image/user.png'

const User = (props) => {
  return (
    <div className={s.u}>
      <div className={s.info}>
        <h3>{props.state.name}</h3>
        <h4>{props.state.phone}</h4>
        <h4>{props.state.email}</h4>
        <h4>{props.state.city}</h4>
      </div>      
        <img src={userPhoto} alt={props.state.name} className={s.img}></img>      
      <div className={s.level}>
        <h5>Level {props.state.level} </h5>
      </div>
    </div>
  );
}

export default User;