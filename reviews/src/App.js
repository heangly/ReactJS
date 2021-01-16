import React from 'react';
import Reviews from './Reviews';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>Our Reviews</h1>
      <div className='line'></div>
      <Reviews />
    </div>
  );
};

export default App;
