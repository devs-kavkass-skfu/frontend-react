import React, { useEffect, useState } from 'react';

import ResumeCard from 'components/ResumeCard';

import apiClient from 'utils/feathersClient';

const ResultsResumes = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await apiClient.service('resumes').find();
    console.log('resp', response);
    setItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="results">
      <h2 className="results__title">Резюме</h2>

      <div className="results__body">
        {items.map(item => (
          <ResumeCard key={item._id} item={item} />
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

export default ResultsResumes;
