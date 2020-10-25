import React from 'react';
// import { Form, Input, Card } from 'antd';
import { Form, Field } from 'react-final-form';
import { useLocation, useHistory, Link } from 'react-router-dom';

import apiClient from 'utils/feathersClient';

const Registration = () => {
  const location = useLocation();
  const history = useHistory();

  const registrationType = location.pathname.includes('employer') ? 'employer' : 'applicant';

  const onSubmit = async values => {
    try {
      const data = {
        ...values,
        role: registrationType,
      };

      await apiClient.service('users').create(data);
      history.push('/auth');
    } catch (e) {
      console.error('Не удалось создать юзера', e);
    }
  };

  return (
    <div className="form-table-container">
      <div className="registration-wrapper">
        <Form
          onSubmit={onSubmit}
          initialValues={{ gender: 'male' }}
          render={({ handleSubmit, pristine, submitting }) => (
            <div className="form-table bg-white">
              <h2 className="form-table__title">
                Регистрация {registrationType === 'employer' ? 'работодателя' : 'соискателя'}
              </h2>

              <div className="form-table__body">
                <div className="form-table__field">
                  <label htmlFor="firstName">Имя:</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    component="input"
                    type="text"
                    className="form-table__field-cell"
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
                  />
                </div>

                <div className="form-table__field">
                  <label htmlFor="phone">Мобильный телефон:</label>
                  <Field
                    id="phone"
                    name="phone"
                    component="input"
                    type="text"
                    className="form-table__field-cell"
                  />
                </div>

                <div className="form-table__field">
                  <label htmlFor="email">Электронная почта:</label>
                  <Field
                    id="email"
                    name="email"
                    component="input"
                    type="text"
                    className="form-table__field-cell"
                  />
                </div>

                {registrationType === 'employer' && (
                  <div className="form-table__field">
                    <label htmlFor="company">Компания:</label>
                    <Field
                      id="company"
                      name="company"
                      component="input"
                      type="text"
                      className="form-table__field-cell"
                    />
                  </div>
                )}

                <div className="form-table__field">
                  <label htmlFor="password">Пароль:</label>
                  <Field
                    id="password"
                    name="password"
                    component="input"
                    type="password"
                    className="form-table__field-cell"
                  />
                </div>

                <div className="form-table__field">
                  <label htmlFor="confirmPassword">Повторите пароль:</label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    component="input"
                    type="password"
                    className="form-table__field-cell"
                  />
                </div>
              </div>

              <button
                className="form-table__submit"
                disabled={pristine || submitting}
                onClick={handleSubmit}
              >
                Зарегистрироваться
              </button>

              <p className="form-table__info">
                Уже есть аккаунт {registrationType === 'employer' ? 'работодателя' : 'соискателя'}?
                <Link to="/auth">Авторизоваться</Link>
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Registration;
