import React from 'react';
// import { Form, Input, Card } from 'antd';
import { Form, Field } from 'react-final-form';
import { useLocation } from 'react-router-dom';

import apiClient from 'utils/feathersClient';

const Registration = () => {
  const location = useLocation();

  const registrationType = location.pathname.includes('employer') ? 'employer' : 'applicant';

  const onSubmit = async values => {
    try {
      const data = {
        ...values,
        role: registrationType,
      };

      await apiClient.service('users').create(data);
    } catch (e) {
      console.error('Не удалось создать юзера', e);
    }
  };

  return (
    <div className="registration-container">
      <Form
        onSubmit={onSubmit}
        initialValues={{ gender: 'male' }}
        render={({ handleSubmit, pristine, submitting }) => (
          <div className="registration">
            <h2 className="registration__title">
              Регистрация {registrationType === 'employer' ? 'работодателя' : 'соискателя'}
            </h2>

            <div className="registration__body">
              <div className="registration__field">
                <label htmlFor="firstName">Имя:</label>
                <Field
                  id="firstName"
                  name="firstName"
                  component="input"
                  type="text"
                  className="registration__field-cell"
                />
              </div>

              <div className="registration__field">
                <label htmlFor="lastName">Фамилия:</label>
                <Field
                  id="lastName"
                  name="lastName"
                  component="input"
                  type="text"
                  className="registration__field-cell"
                />
              </div>

              <div className="registration__field">
                <label htmlFor="phone">Мобильный телефон:</label>
                <Field
                  id="phone"
                  name="phone"
                  component="input"
                  type="text"
                  className="registration__field-cell"
                />
              </div>

              <div className="registration__field">
                <label htmlFor="email">Электронная почта:</label>
                <Field
                  id="email"
                  name="email"
                  component="input"
                  type="text"
                  className="registration__field-cell"
                />
              </div>

              {registrationType === 'employer' && (
                <div className="registration__field">
                  <label htmlFor="company">Компания:</label>
                  <Field
                    id="company"
                    name="company"
                    component="input"
                    type="text"
                    className="registration__field-cell"
                  />
                </div>
              )}

              {registrationType === 'applicant' && (
                <div className="registration__field">
                  <label htmlFor="age.day">Дата рождения:</label>
                  <div className="registration__field-cell registration__field-birth">
                    <div>
                      <Field
                        id="age.day"
                        name="age.day"
                        component="input"
                        type="number"
                        placeholder="День"
                      />
                      <Field name="age.month" component="input" type="number" placeholder="Месяц" />
                      <Field name="age.year" component="input" type="number" placeholder="Год" />
                    </div>
                  </div>
                </div>
              )}

              {registrationType === 'applicant' && (
                <div className="registration__field">
                  <label>Пол:</label>
                  <div className="registration__field-cell registration__field-radio">
                    <div>
                      <Field
                        id="gender-male"
                        name="gender"
                        component="input"
                        type="radio"
                        value="male"
                      />
                      <label htmlFor="gender-male">Мужской</label>
                    </div>
                    <div>
                      <Field
                        id="gender-female"
                        name="gender"
                        component="input"
                        type="radio"
                        value="female"
                      />
                      <label htmlFor="gender-female">Женский</label>
                    </div>
                  </div>
                </div>
              )}

              <div className="registration__field">
                <label htmlFor="password">Пароль:</label>
                <Field
                  id="password"
                  name="password"
                  component="input"
                  type="password"
                  className="registration__field-cell"
                />
              </div>

              <div className="registration__field">
                <label htmlFor="confirmPassword">Повторите пароль:</label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  component="input"
                  type="password"
                  className="registration__field-cell"
                />
              </div>
            </div>

            <button
              className="registration__submit"
              disabled={pristine || submitting}
              onClick={handleSubmit}
            >
              Зарегистрироваться
            </button>

            <p className="registration__info">
              Уже есть аккаунт {registrationType === 'employer' ? 'работодателя' : 'соискателя'}?
              Авторизоваться
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default Registration;
