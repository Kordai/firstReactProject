import React from 'react';
import s from './Menu.module.css';

const Menu = () => {
  return (
    <div className={s.m}>
      <div className={s.item}>Панель управления</div>
      <div className={s.item}>Финансовый отчет</div>
      <div className={s.item}>Заявки</div>
      <div className={s.item}>Точки продаж</div>
    </div>
  );
}

export default Menu;