import React from 'react';
import s from './auth.module.css';
import logo from 'assets/images/logo.svg';

const Auth = props => {
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
              <input type="text" />
            </div>
            <div className={s.input}>
              <input type="text" />
            </div>
            <button className={s.bt}>ВОЙТИ</button>
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
