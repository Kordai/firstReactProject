import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <div className={s.m}>
      <NavLink to="/" className={({ isActive }) => isActive ? s.active : s.decarationNone} >Control panel</NavLink>
      <NavLink to="/panelmoney" className={({ isActive }) => isActive ? s.active : s.decarationNone} >Payments</NavLink>
      <NavLink to="/panelapplications" className={({ isActive }) => isActive ? s.active : s.decarationNone} >Applications</NavLink>
      <NavLink to="/panelpoints" className={({ isActive }) => isActive ? s.active : s.decarationNone} >Points</NavLink>
      <NavLink to="/panelusers" className={({ isActive }) => isActive ? s.active : s.decarationNone} >Users</NavLink>
    </div>
  );
}

export default Menu;