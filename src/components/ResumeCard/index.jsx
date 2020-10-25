import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import moment from 'moment';

import { ReactComponent as FavoriteIcon } from 'assets/images/favorite.svg';

const ResumeBlock = ({ item }) => {
  const history = useHistory();

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="resume-card">
      <div className="resume-card__head">
        <div className="resume-card__left">
          <div className="resume-card__specialization">{item.specialization}</div>
          <div className="resume-card__age">{item.age} лет</div>
          {item.hasExperience ? (
            <div className="resume-card__jobExperience">
              <span>Последнее место работы</span>
              <span>{item.jobExperience}</span>
            </div>
          ) : (
            <div className="resume-card__jobExperience">
              <span>Опыт работы</span>
              <span>Нет</span>
            </div>
          )}
        </div>
        <div className="resume-card__right">
          <div className="resume-card__rating">
            <span className="resume-card__rating-numbers">5/5</span>
            <span className="resume-card__rating-info">Рейт</span>
          </div>
        </div>
      </div>
      <div className="resume-card__info">
        <div className="resume-card__updatedAt">
          Обновлено {moment(item.updatedAt).format('DD MMMM HH:mm')}
        </div>
        .<div className="resume-card__last-visit">Был на сайте вчера в 23:31</div>
      </div>
      <div className="resume-card__actions">
        <button
          className="resume-card__button"
          onClick={() => history.push(`/view/resumes/${item._id}`)}
        >
          Подробнее
        </button>
        <FavoriteIcon
          className={`resume-card__favorite ${isFavorite ? 'resume-card__favorite--active' : ''}`}
          onClick={() => setIsFavorite(v => !v)}
        />
        <div className="resume-card__salary">до {item.salaryTo || item.salaryFrom}</div>
      </div>
    </div>
  );
};

export default ResumeBlock;
