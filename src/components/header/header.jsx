import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getUser, setUser } from 'utils';
import apiClient from 'utils/feathersClient';

import s from './header.module.css';
import logo from 'assets/images/logo.svg';

import { ReactComponent as AvatarIcon } from 'assets/images/avatar-logout.svg';

const Header = props => {
  const history = useHistory();
  const user = getUser();

  const logout = async () => {
    try {
      await apiClient.logout();
      setUser({});
      history.push('/');
    } catch (e) {
      console.error('Не удалось логаут');
    }
  };

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

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {user && user._id ? (
          <>
            {user.role === 'employer' ? (
              <Link to="/create-vacancy" className="create-vacancy-button">
                Создать вакансию
              </Link>
            ) : user.role === 'applicant' ? (
              <Link to="/create-resume" className="create-vacancy-button">
                Создать резюме
              </Link>
            ) : user.role === 'admin' ? (
              <>
                <Link to="/create-vacancy" className="create-vacancy-button">
                  Создать вакансию
                </Link>
                <Link to="/create-resume">Создать резюме</Link>
              </>
            ) : null}
            <AvatarIcon className="logout" onClick={logout} />
          </>
        ) : (
          <>
            <Link to="/registration/applicant">Соискателям</Link>
            <Link to="/registration/employer">Работадателям</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
