import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import apiClient from 'utils/feathersClient';

const View = () => {
  const {
    params: { type: viewType, id },
  } = useRouteMatch();

  const [item, setItem] = useState({});

  const fetchData = async () => {
    const response = await apiClient.service(viewType).get(id);

    setItem(response);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="view-container">
      <h2 style={{ marginTop: '0', paddingTop: '20px', marginLeft: '40px' }}>
        Описание {viewType === 'vacancies' ? 'вакансии' : 'резюме'}
      </h2>

      <div className="view">
        {getListOfValues(item).map(({ key, value }) => (
          <div className="view__row" key={key}>
            <div className="view__cell">{types[key]}:</div>
            <div className="view__cell">
              {viewType === 'resumes'
                ? typeof value === 'boolean'
                  ? getBoolean(value)
                  : value
                : key === 'occupationType'
                ? occupationTypes[value]
                : value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getListOfValues = obj => {
  const clone = { ...obj };
  delete clone._id;
  delete clone.createdAt;
  delete clone.updatedAt;
  delete clone.score;
  delete clone.__v;

  return Object.entries(clone).map(item => {
    const [key, value] = item;
    return { key, value };
  });
};

const getBoolean = val => (val ? 'Да' : 'Нет');

const types = {
  firstName: 'Имя',
  lastName: 'Фамилия',
  specialization: 'Должность',
  hasGraduated: 'Выпускник университета',
  degree: 'Степень',
  skills: 'Ключевые навыки',
  age: 'Возраст',
  gender: 'Пол',
  achievements: 'Достижения',
  isRemote: 'Удаленно',
  hasExperience: 'Есть опыт',
  about: 'Описание',
  salaryFrom: 'Зарплата от',
  salaryTo: 'Зарплата до',
  volunteerExperience: 'Опыт волонтерской или общественной деятельности',
  personalSkills: 'Личные качества',
  contactInfo: 'Контактная информация',
  languages: 'Владение языками',
  companyName: 'Название компании',
  description: 'Описание',
  occupationType: 'Тип занятости',
  jobLocation: 'Место работы',
};

const occupationTypes = {
  part: 'Неполная',
  full: 'Полная',
  project: 'Проектная',
  intern: 'Стажер',
};

export default View;
