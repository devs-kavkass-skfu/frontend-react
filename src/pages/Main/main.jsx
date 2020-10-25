import React from 'react';

import Serch from 'components/serch/serch';
import Body from 'components/body/body';
import Trust from 'components/trust/trust';

const Main = props => {
  return (
    <div>
      <Serch />
      <Body />
      <Trust />
    </div>
  );
};

export default Main;
