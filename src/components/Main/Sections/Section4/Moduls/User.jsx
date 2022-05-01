import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../../image/user.png'

const User = (props) => {

  return (
    <div className={s.u}>
      <div className={s.info}>
        <h3>{props.name}</h3>
        <h4>{props.phone}</h4>
        <h4>{props.email}</h4>
        <h4>{props.city}</h4>
      </div>      
        <img src={userPhoto} alt={props.name} className={s.img}></img>      
      <div className={s.level}>
        <h5>Level {props.level} </h5>
      </div>
    </div>
  );
}

export default User;