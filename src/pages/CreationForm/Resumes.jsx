import React from 'react';
import { Form, Field } from 'react-final-form';

import apiClient from 'utils/feathersClient';

const VacanciesForm = () => {
  const onSubmit = async values => {
    try {
      const data = {
        ...values,
        skills: values.skills.split(', '),
        languages: values.languages.split(', '),
      };

      const response = await apiClient.service('resumes').create(values);
      console.log('respnse', response);
      // history.push('/auth');
    } catch (e) {
      console.error('Не удалось создать юзера', e);
    }
  };

  return (
    <div className="vacancy-form-container">
      <Form
        onSubmit={onSubmit}
        initialValues={{ gender: 'male', hasExperience: false, isRemote: false }}
        render={({ handleSubmit, pristine, submitting, values }) => (
          <div className="form-table ">
            <h2 className="form-table__title">Создание резюме</h2>

            <div className="form-table__body">
              <div className="form-table__field">
                <label htmlFor="specialization">Желаемая Должность:</label>
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
                <label htmlFor="firstName">Имя:</label>
                <Field
                  id="firstName"
                  name="firstName"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Магомед"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="lastName">Фамилия:</label>
                <Field
                  id="lastName"
                  name="lastName"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Ахмедов"
                />
              </div>
              <div className="form-table__field">
                <label htmlFor="age">Возраст:</label>
                <Field
                  id="age"
                  name="age"
                  component="input"
                  type="number"
                  className="form-table__field-cell"
                  placeholder="21 год"
                />
              </div>

              <div className="form-table__field">
                <label>Пол:</label>
                <div className="form-table__field-cell radio-group-column">
                  <div>
                    <Field
                      id="not-full"
                      name="gender"
                      component="input"
                      type="radio"
                      value="male"
                    />
                    <label htmlFor="not-full">Мужской</label>
                  </div>
                  <div>
                    <Field id="full" name="gender" component="input" type="radio" value="female" />
                    <label htmlFor="full">Женский</label>
                  </div>
                </div>
              </div>

              <div className="form-table__field">
                <label htmlFor="occupationType">Занятость:</label>
                <div className="form-table__field-cell radio-group-column">
                  <div>
                    <Field
                      id="occupationType-part"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="part"
                    />
                    <label htmlFor="not-full">Неполный рабочий день</label>
                  </div>
                  <div>
                    <Field
                      id="occupationType-full"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="full"
                    />
                    <label htmlFor="full">Полный рабочий день</label>
                  </div>
                  <div>
                    <Field
                      id="occupationType-project"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="project"
                    />
                    <label htmlFor="project">Проектная</label>
                  </div>
                  <div>
                    <Field
                      id="occupationType-intern"
                      name="occupationType"
                      component="input"
                      type="radio"
                      value="intern"
                    />
                    <label htmlFor="intern">Стажировка</label>
                  </div>
                </div>
              </div>

              <div className="form-table__field">
                <label htmlFor="isRemote">Удаленно:</label>
                <div className="form-table__field-cell radio-group-column">
                  <div>
                    <Field id="isRemote" name="isRemote" component="input" type="checkbox" />
                  </div>
                </div>
              </div>

              <div className="form-table__field">
                <label htmlFor="about">О себе:</label>
                <Field
                  id="about"
                  name="about"
                  component="textarea"
                  type="text"
                  className="form-table__field-cell big-textarea"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="degree">Образование:</label>
                <Field
                  id="degree"
                  name="degree"
                  component="textarea"
                  type="text"
                  className="form-table__field-cell small-textarea"
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
                <label htmlFor="hasExperience">Есть опыт работы:</label>
                <div className="form-table__field-cell radio-group-column">
                  <div>
                    <Field
                      id="hasExperience"
                      name="hasExperience"
                      component="input"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>

              {values.hasExperience && (
                <div className="form-table__field">
                  <label htmlFor="experienceInfo">Описание опыта работы:</label>
                  <Field
                    id="experienceInfo"
                    name="experienceInfo"
                    component="textarea"
                    type="text"
                    className="form-table__field-cell small-textarea"
                  />
                </div>
              )}

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
                <label htmlFor="achievements">Достижения:</label>
                <Field
                  id="achievements"
                  name="achievements"
                  component="textarea"
                  type="text"
                  className="form-table__field-cell small-textarea"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="personalSkills">Личные качества:</label>
                <Field
                  id="personalSkills"
                  name="personalSkills"
                  component="textarea"
                  type="text"
                  className="form-table__field-cell small-textarea"
                  placeholder="Активный, люблю котлеты"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="languages">Владение языками:</label>
                <Field
                  id="languages"
                  name="languages"
                  component="input"
                  type="text"
                  className="form-table__field-cell"
                  placeholder="Python, photoshop, figma"
                />
              </div>

              <div className="form-table__field">
                <label htmlFor="volunteerExperience">
                  Опыт волонтерской или общественной деятельности:
                </label>
                <Field
                  id="volunteerExperience"
                  name="volunteerExperience"
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
                  placeholder="Python, photoshop, figma"
                />
              </div>
            </div>

            <button
              className="form-table__submit search-button"
              disabled={pristine || submitting}
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
