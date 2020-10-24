import React from 'react';
import Header from 'components/header/header';
import Serch from 'components/serch/serch';
import Body from 'components/body/body';
import Footer from 'components/footer/footer';

const Main = props => {
  return (
    <div>
      <Header />
      <Serch />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
