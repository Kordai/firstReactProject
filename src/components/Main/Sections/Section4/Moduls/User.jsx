import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../../image/user.png'

const User = (props) => {

  return (
    <div className={s.u}>
      <div className={s.info}>
        <h3>Name</h3>
        <h4>Phone</h4>
        <h4>E-mail</h4>
        <h4>City</h4>
      </div>      
        <img src={userPhoto} alt="user" className={s.img}></img>      
      <div className={s.level}>
        <h5>Level 254</h5>
      </div>
    </div>
  );
}

export default User;