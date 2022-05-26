import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../../image/user.png'
import { NavLink } from 'react-router-dom';

const User = (props) => {

  const openProfileUser = (id) => {
    
    console.log(id)
    
  }

  return (
    <NavLink className={s.noDecoration} to={"/panelusers/userprofile/" + props.state.id}>
    <div onDoubleClick={() => openProfileUser(props.state)} className={s.u}>
      <div className={s.info}>
        <div>
          <h3>{props.state.firstName}</h3>
          <h3>{props.state.lastName}</h3>
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
    </NavLink>
  );
}

export default User;