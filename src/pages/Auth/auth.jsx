import React, { useState } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

import apiClient from 'utils/feathersClient';

import s from './auth.module.css';
import logo from 'assets/images/logo.svg';

const Auth = props => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    try {
      const response = await apiClient.authenticate({
        email,
        password,
        strategy: 'local',
      });
      localStorage.setItem('userObj', JSON.stringify(response.user));
      history.push('/');
    } catch (e) {
      message.error('Не удалось войти, проверьте данные', e);
    }
  };

  return (
    <div className={s.sam}>
      <div className={s.all}>
        <div className={s.container}>
          <div className={s.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.body}>
            <p className={s.title}>Вход </p>
            <div className={s.input}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className={s.input}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button className={s.bt} onClick={onSubmit}>
              ВОЙТИ
            </button>
            <p className={s.text}>Восстановить пароль</p>
          </div>
          <div>
            <p>Нет аккаунта ? Зарегистрироваться</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
