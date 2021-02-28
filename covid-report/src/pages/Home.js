import React from 'react';
import Posts from '../components/Posts';
import Statistic from '../components/Statistic';

const Home = () => {
  return (
    <div className='home'>
      <div className='row d-flex justify-content-between'>
        <div className='col-lg-8'>
          <Posts />
        </div>
        <div
          className='d-none d-lg-block col-lg-3 border statistic-container'
          style={{ height: '370px' }}
        >
          <Statistic />
        </div>
      </div>
    </div>
  );
};

export default Home;
