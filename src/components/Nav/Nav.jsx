import React from 'react';
import AuthUserContainer from './AuthUser/AuthUserContainer';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.n}>
      <Logo />
      <Menu />
      <AuthUserContainer />
      <div>
        Footer
      </div>
    </nav>
  );
}

export default Nav;