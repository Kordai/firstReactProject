import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../../image/user.png'

const User = (props) => {

  return (
    <div className={s.u}>
      <div className={s.info}>
        <h2>Name</h2>
        <h3>Phone</h3>
        <h3>E-mail</h3>
        <h3>City</h3>
      </div>
      <div className={s.img}>
        <img src={userPhoto} ></img>
      </div>
      <div className={s.level}>
        <h4>Level 254</h4>
      </div>
    </div>
  );
}

export default User;