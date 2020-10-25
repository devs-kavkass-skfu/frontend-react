import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import moment from 'moment';

import { ReactComponent as FavoriteIcon } from 'assets/images/favorite.svg';

const VacancyCard = ({ item }) => {
  const history = useHistory();

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="vacancy-card">
      <div className="vacancy-card__head">
        <div className="vacancy-card__left">
          <div className="vacancy-card__specialization">{item.specialization}</div>
          <div className="vacancy-card__age">{item.companyName}</div>
          <div className="vacancy-card__jobExperience">
            <span>Ключевые навыки</span>
            <span>{item.skills.join(', ')}</span>
          </div>
          <div className="vacancy-card__jobExperience">
            <span>Тип занятости</span>
            <span>{types[item.occupationType]}</span>
          </div>
        </div>
      </div>
      <div className="vacancy-card__info">
        <div className="vacancy-card__updatedAt">
          Обновлено {moment(item.updatedAt).format('DD MMMM HH:mm')}
        </div>
      </div>
      <div className="vacancy-card__actions">
        <button
          className="vacancy-card__button"
          onClick={() => history.push(`/view/vacancies/${item._id}`)}
        >
          Подробнее
        </button>
        <FavoriteIcon
          className={`vacancy-card__favorite ${isFavorite ? 'vacancy-card__favorite--active' : ''}`}
          onClick={() => setIsFavorite(v => !v)}
        />
        <div className="vacancy-card__salary">до {item.salaryTo || item.salaryFrom}</div>
      </div>
    </div>
  );
};

const types = {
  part: 'Неполная',
  full: 'Полная',
  project: 'Проектная',
  intern: 'Стажер',
};

export default VacancyCard;
