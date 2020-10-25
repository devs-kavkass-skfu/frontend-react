import React from 'react';
import { Form, Field } from 'react-final-form';

import apiClient from 'utils/feathersClient';

const VacanciesForm = () => {
  const onSubmit = async values => {
    try {
      const data = {
        ...values,
        skills: values.skills.split(', '),
      };
      await apiClient.service('vacancies').create(data);
    } catch (e) {
      console.error('Не удалось создать юзера', e);
    }
  };

  return (
    <div className="vacancy-form-container">
      <Form
        onSubmit={onSubmit}
        initialValues={{ gender: 'male' }}
        render={({ handleSubmit, pristine, submitting }) => (
          <div className="form-table ">
            <h2 className="form-table__title">Создание вакансии</h2>

            <div className="form-table__body">
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
                <label htmlFor="companyName">Компания:</label>
                <Field
                  id="companyName"
                  name="companyName"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Goolge, facebook"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="description">Описание:</label>
                <Field
                  id="description"
                  name="description"
                  component="textarea"
                  type="text"
                  className="form-table__field-cell big-textarea"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="skills">Ключевые навыки:</label>
                <Field
                  id="skills"
                  name="skills"
                  component="textarea"
                  type="text"
                  className="form-table__field-cell small-textarea"
                  placeholder="Python, photoshop, figma"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="contactInfo">Контактная информация:</label>
                <Field
                  id="contactInfo"
                  name="contactInfo"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Номер телефона, email"
                />
              </div>

              <div className="form-table__field">
                <label>Занятость:</label>
                <div className="form-table__field-cell radio-group-column">
                  <div>
                    <Field
                      id="occupationType-part"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="part"
                    />
                    <label htmlFor="occupationType-part">Неполный рабочий день</label>
                  </div>
                  <div>
                    <Field
                      id="occupationType-full"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="full"
                    />
                    <label htmlFor="occupationType-full">Полный рабочий день</label>
                  </div>
                  <div>
                    <Field
                      id="occupationType-project"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="project"
                    />
                    <label htmlFor="occupationType-project">Проектная</label>
                  </div>
                  <div>
                    <Field
                      id="occupationType-intern"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="intern"
                    />
                    <label htmlFor="occupationType-intern">Стажер</label>
                  </div>
                </div>
              </div>

              <div className="form-table__field">
                <label htmlFor="salaryFrom">Зарплата:</label>
                <div style={{ display: 'flex' }}>
                  <Field
                    style={{ marginRight: '20px' }}
                    id="salaryFrom"
                    name="salaryFrom"
                    component="input"
                    type="number"
                    placeholder="От"
                    className="form-table__field-cell"
                  />
                  <Field
                    id="salaryTo"
                    name="salaryTo"
                    component="input"
                    type="number"
                    placeholder="До"
                    className="form-table__field-cell"
                  />
                </div>
              </div>

              <div className="form-table__field">
                <label htmlFor="jobLocation">Физический адрес:</label>
                <Field
                  id="jobLocation"
                  name="jobLocation"
                  component="textarea"
                  type="text"
                  className="form-table__field-cell small-textarea"
                />
              </div>

              <div className="form-table__salary"></div>
            </div>

            <button
              className="form-table__submit search-button"
              disabled={pristine}
              onClick={handleSubmit}
            >
              Опубликовать
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default VacanciesForm;
