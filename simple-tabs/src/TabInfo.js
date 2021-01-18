import React from 'react';

const TabInfo = ({ id, company, dates, duties, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{company}</h3>
      <p className='date'>{dates}</p>
      <div className='duties'>
        {duties.map((duty, index) => (
          <div className='duty'>
            <i className='fas fa-angle-double-right' />
            <p key={id + index}>{duty}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabInfo;
