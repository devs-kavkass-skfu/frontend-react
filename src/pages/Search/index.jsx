import React from 'react';
// import { Form, Input, Card } from 'antd';
import { Form, Field } from 'react-final-form';
import { useLocation, useHistory } from 'react-router-dom';

import apiClient from 'utils/feathersClient';

const ExtendedSearch = () => {
  const location = useLocation();
  const history = useHistory();

  const searchType = location.pathname.includes('vacancies') ? 'vacancies' : 'resumes';

  const onSubmit = async values => {
    try {
      const query = {
        $search: values.keywords,
        specialization: values.specialization,
        skills: values.skill.split(', '),
        occupationType: values.occupationType,
        salaryFrom: values.salaryFrom,
        salaryTo: values.salaryTo,
      };

      const response = await apiClient.service(searchType).find({ query });
      console.log('respnse', response);
      // history.push('/auth');
    } catch (e) {
      console.error('Не удалось создать юзера', e);
    }
  };

  return (
    <div className="search-container">
      <Form
        onSubmit={onSubmit}
        initialValues={{ gender: 'male' }}
        render={({ handleSubmit, pristine, submitting }) => (
          <div className="form-table ">
            <h2 className="form-table__title">
              Поиск {searchType === 'vacancies' ? 'вакансий' : 'по резюме'}
            </h2>

            <div className="form-table__body">
              <div className="form-table__field">
                <label htmlFor="keywords">Ключевые слова:</label>
                <Field
                  id="keywords"
                  name="keywords"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Веб-разработчик, дизайнер"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="specialization">Должность:</label>
                <Field
                  id="specialization"
                  name="specialization"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Js разработчик"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="phone">Навыки:</label>
                <Field
                  id="phone"
                  name="phone"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Python, photoshop, figma"
                />
              </div>

              {searchType === 'resumes' && (
                <>
                  <div className="form-table__field">
                    <label htmlFor="phone">Закончил университет:</label>
                    <Field
                      id="phone"
                      name="hasDegree"
                      component="input"
                      type="checkbox"
                      className="form-table__field-cell search-checkbox"
                    />
                  </div>
                  <div className="form-table__field">
                    <label htmlFor="phone">Есть опыт:</label>
                    <Field
                      id="phone"
                      name="hasExperience"
                      component="input"
                      type="checkbox"
                      className="form-table__field-cell search-checkbox"
                    />
                  </div>
                </>
              )}

              <div className="form-table__field">
                <label>Занятость:</label>
                <div
                  className="form-table__field-cell"
                  style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
                >
                  <div style={{ display: 'flex', marginBottom: '15px', width: '100%' }}>
                    <Field
                      id="not-full"
                      name="gender"
                      component="input"
                      type="radio"
                      value="male"
                    />
                    <label
                      htmlFor="not-full"
                      style={{ width: '100%', textAlign: 'left', marginLeft: '10px' }}
                    >
                      Неполный рабочий день
                    </label>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Field id="full" name="gender" component="input" type="radio" value="female" />
                    <label htmlFor="full">Полный рабочий день</label>
                  </div>
                </div>
              </div>

              <div className="form-table__field">
                <label htmlFor="password">Зарплата:</label>
                <div style={{ display: 'flex' }}>
                  <Field
                    style={{ marginRight: '20px' }}
                    id="password"
                    name="password"
                    component="input"
                    type="password"
                    placeholder="От"
                    className="form-table__field-cell"
                  />
                  <Field
                    id="password"
                    name="password"
                    component="input"
                    type="password"
                    placeholder="До"
                    className="form-table__field-cell"
                  />
                </div>
              </div>

              <div className="form-table__salary"></div>
            </div>

            <button
              className="form-table__submit search-button"
              disabled={pristine}
              onClick={handleSubmit}
            >
              Поиск
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default ExtendedSearch;
