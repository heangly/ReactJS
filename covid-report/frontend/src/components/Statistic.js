import React from 'react';
import { AppContext } from '../context/context';

const Statistic = () => {
  const { location } = React.useContext(AppContext);
  let total = 0;

  return (
    <div className='statistic text-center my-3'>
      <h4>
        {' '}
        <i className='fas fa-chart-bar'></i> Statistic
      </h4>
      <div className='locations mt-4 '>
        {Object.keys(location).map((eachLocation) => {
          total += location[eachLocation];
          return (
            <p key={eachLocation}>
              {eachLocation}: {location[eachLocation]}
            </p>
          );
        })}
      </div>
      <hr />
      <div className='total-case'>
        <p>Total Cases: {total} cases</p>
      </div>
    </div>
  );
};

export default Statistic;
