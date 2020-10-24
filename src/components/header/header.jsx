import React from 'react';
import { Link } from 'react-router-dom';

import s from './header.module.css';
import logo from 'assets/images/logo.svg';

const Header = props => {
  return (
    <div className={s.head}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Link to="/registration/applicant">Соискателям</Link>
        <Link to="/registration/employer">Работадателям</Link>
      </div>
    </div>
  );
};

export default Header;
