import React from 'react';

const Statistic = () => {
  return (
    <div className='statistic text-center my-3'>
      <h4>
        {' '}
        <i className='fas fa-chart-bar'></i> Statistic
      </h4>
      <div className='locations mt-4 '>
        <p>Location 1: #10 cases</p>
        <p>Location 2: #10 cases</p>
        <p>Location 3: #10 cases</p>
        <p>Location 4: #10 cases</p>
      </div>
      <hr />
      <div className='total-case'>
        <p>Total Cases: #40 cases</p>
      </div>
    </div>
  );
};

export default Statistic;
