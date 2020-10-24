import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import s from './header.module.css';
import logo from 'assets/images/logo.svg';

const Header = props => {
  const history = useHistory();
  return (
    <div className={s.head}>
      <div className={s.logo}>
        <img
          src={logo}
          alt="logo"
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/')}
        />
      </div>
      <div>
        <Link to="/registration/applicant">Соискателям</Link>
        <Link to="/registration/employer">Работадателям</Link>
      </div>
    </div>
  );
};

export default Header;
