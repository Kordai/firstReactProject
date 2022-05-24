import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../../image/user.png'

const User = (props) => {
  return (
    <div className={s.u}>
      <div className={s.info}>
        <div>
          <h3>{props.state.name}</h3>
          <h5>{props.state.phone}</h5>
        </div>
        <img src={userPhoto} alt={props.state.name} className={s.img}></img>
      </div>
      <div className={s.contact}>
        <h5>{props.state.email}</h5>
        <h5>{props.state.city}</h5>
      </div>

      <div className={s.level}>
        <h6>Level {props.state.level} </h6>
      </div>
    </div>
  );
}

export default User;