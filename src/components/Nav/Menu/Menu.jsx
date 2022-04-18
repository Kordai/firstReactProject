import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <div className={s.m}>
      <NavLink to="/panelcontrol" className={s.item}>Панель управления</NavLink>
      <NavLink to="/panelmoney" className={s.item}>Финансовый отчет</NavLink>
      <NavLink to="/panelapplications" className={s.item}>Заявки</NavLink>
      <NavLink to="/panelpoints" className={s.item}>Точки продаж</NavLink>
    </div>
  );
}

export default Menu;