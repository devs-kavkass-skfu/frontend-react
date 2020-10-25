import React from 'react';

import Trust from 'components/trust/trust'
import Header from 'components/header/header';
import Futter from 'components/footer/footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      {children}
      <Trust/>
      <Futter />
    </div>
  );
};

export default MainLayout;
