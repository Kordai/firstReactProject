import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.h}>      
      <div>Новое сообщение</div>
      <div>Новая заявка</div>
      <div>Новая оплата</div>
    </header>
  );
}

export default Header;