import React from 'react';
import s from './Menu.module.css';

const Menu = () => {
  return (
    <div className={s.m}>
      <div className={s.item}>Меню</div>
      <div className={s.item}>Кофе</div>
      <div className={s.item}>Настройки</div>
      <div className={s.item}>Контакты</div>
    </div>
  );
}

export default Menu;