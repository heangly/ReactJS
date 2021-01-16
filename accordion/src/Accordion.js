import React from 'react';
import QA from './QA';

const Accordion = ({ data }) => {
  return (
    <div className='card'>
      <h1>Questions And Answers About Login</h1>
      {data.map((d) => (
        <QA key={d.id} {...d} />
      ))}
    </div>
  );
};

export default Accordion;
