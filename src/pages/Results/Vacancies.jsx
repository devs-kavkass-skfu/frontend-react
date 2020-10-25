import React, { useEffect, useState } from 'react';

import VacancyCard from 'components/VacancyCard';

import apiClient from 'utils/feathersClient';

const ResultsVacancies = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await apiClient.service('vacancies').find();
    console.log('resp', response);
    setItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="results">
      <h2 className="results__title">Вакансии</h2>

      <div className="results__body">
        {items.map(item => (
          <VacancyCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const items = [
//   {
//     _id: 1,
//     specialization: 'HTML-верстальщик',
//     age: 25,
//     experienceInfo: 'Был Front-end разработчиком',
//     updatedAt: new Date(),
//     salaryFrom: 20000,
//     salaryTo: 50000,
//   },
//   {
//     _id: 2,
//     specialization: 'HTML-верстальщик',
//     age: 25,
//     experienceInfo: 'Был Front-end разработчиком',
//     updatedAt: new Date(),
//     salaryFrom: 20000,
//     salaryTo: 50000,
//   },
//   {
//     _id: 3,
//     specialization: 'HTML-верстальщик',
//     age: 25,
//     experienceInfo: 'Был Front-end разработчиком',
//     updatedAt: new Date(),
//     salaryFrom: 20000,
//     salaryTo: 50000,
//   },
// ];

export default ResultsVacancies;
