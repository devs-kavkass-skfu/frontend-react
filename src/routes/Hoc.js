import React from 'react';
import { Route } from 'react-router-dom';

const Hoc = ({ layout: Layout, ...rest }) => {
  if (!Layout) {
    return <Route path="/" {...rest} />;
  }

  return (
    <Layout>
      <Route path="/" {...rest} />
    </Layout>
  );
};

export default Hoc;
