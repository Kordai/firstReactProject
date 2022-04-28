import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <div className={s.m}>
      <NavLink to="/" className={({ isActive }) => isActive ? s.active : undefined} >Панель управления</NavLink>
      <NavLink to="/panelmoney" className={({ isActive }) => isActive ? s.active : undefined} >Оплаты</NavLink>
      <NavLink to="/panelapplications" className={({ isActive }) => isActive ? s.active : undefined} >Заявки</NavLink>
      <NavLink to="/panelpoints" className={({ isActive }) => isActive ? s.active : undefined} >Точки продаж</NavLink>
    </div>
  );
}

export default Menu;