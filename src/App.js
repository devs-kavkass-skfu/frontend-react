import React from 'react';

import Routes from 'routes';

import moment from 'moment';
import 'moment/locale/ru';

import 'assets/styles/index.scss';

moment.locale('ru-RU');

function App() {
  return (
    <div className="container">
      <Routes />
    </div>
  );
}

export default App;
