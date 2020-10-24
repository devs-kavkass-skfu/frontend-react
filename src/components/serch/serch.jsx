import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import s from './serch.module.css';
import app from 'assets/images/app.svg';
import play from 'assets/images/paly.png';

const Serch = props => {
  const history = useHistory();

  return (
    <div className={s.head}>
      <main className={s.bg}>
        <div className={s.header}>
          <div className={s.about}>
            <ul>
              <li>Вакнсии</li>
              <li>Специалисты</li>
              <li>Компании</li>
              <li>Образование</li>
            </ul>
          </div>
          <div className={s.auth}>
            <button className={s.b1} onClick={() => history.push('/summery')}>
              Создать резюме
            </button>
            <Link className={s.b2} to="/auth">
              Войти
            </Link>
            {/* <button className={s.b2}>Войти</button> */}
          </div>
        </div>
        <div className={s.serch}>
          <h1>Работа найдется для каждого студента</h1>
          <div className={s.com}>
            <input type="text" />
            <button onClick={() => history.push('/search/resumes')}>Найти</button>
          </div>
        </div>
        <div className={s.footer}>
          <ul>
            <li>
              5 258<div className={s.s}>резюме</div>
            </li>
            <li>
              10 541<div className={s.s}>вакансий</div>
            </li>
            <li>
              18 248<div className={s.s}>нашли работу</div>
            </li>
          </ul>
          <div className={s.img}>
            <img src={app} alt="" />
            <img src={play} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Serch;
