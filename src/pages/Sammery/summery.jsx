import MakeSummery from 'components/MakeSummer/MakeSummer';
import React from 'react';
import s from './summery.module.css';

const Summery = props => {
  return (
    <div className={s.all}>
      <MakeSummery />
    </div>
  );
};

export default Summery;
