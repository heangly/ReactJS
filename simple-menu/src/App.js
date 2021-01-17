import React from 'react';
import MenuList from './MenuList';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1>Our Menu</h1>
      <div className='line'></div>
      <MenuList />
    </div>
  );
};

export default App;
