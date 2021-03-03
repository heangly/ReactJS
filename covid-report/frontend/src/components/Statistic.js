import React from 'react';
import { AppContext } from '../context/context';

const Statistic = () => {
  const { location } = React.useContext(AppContext);
  let total = 0;

  return (
    <div className='statistic text-center my-3 px-2'>
      <h4>
        {' '}
        <i className='fas fa-chart-bar'></i> Statistic
      </h4>
      <div className='locations mt-4 '>
        {Object.keys(location).map((eachLocation) => {
          total += location[eachLocation];
          return (
            <p key={eachLocation} className='d-flex justify-content-between'>
              <span>{eachLocation}:</span> {location[eachLocation]}
            </p>
          );
        })}
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <span> Total Cases: </span>
        {total} cases
      </div>
    </div>
  );
};

export default Statistic;
