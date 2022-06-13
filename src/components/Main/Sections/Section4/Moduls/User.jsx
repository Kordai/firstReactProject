import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../../image/user.png'
import { NavLink } from 'react-router-dom';

const User = ({state}) => {

  return (
    <NavLink className={s.noDecoration} to={"/panelusers/userprofile/" + state.id}>
      <div  className={s.u}>
        <div className={s.info}>
          <div>
            <h3>{state.firstName}</h3>
            <h3>{state.lastName}</h3>

          </div>
          <img src={userPhoto} alt={state.name} className={s.img}></img>
        </div>
        <div className={s.contact}>
          <h5>{state.phone}</h5>
          <h5>{state.email}</h5>
          <h5>{state.city}</h5>
        </div>

        <div className={s.level}>
          <h6>Level {state.level} </h6>
        </div>
      </div>
    </NavLink>
  );
}

export default User;