import React from 'react';

import Header from 'components/header/header';
import Futter from 'components/footer/footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      {children}
      <Futter />
    </div>
  );
};

export default MainLayout;
