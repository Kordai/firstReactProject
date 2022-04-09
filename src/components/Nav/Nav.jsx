import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.n}>
      <div>Меню</div>
      <div>Кофе</div>
      <div>Настройки</div>
      <div>Контакты</div>
    </nav>
  );
}

export default Nav;