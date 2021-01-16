import React from 'react';
import data from './data';
import Accordion from './Accordion';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Accordion data={data} />
    </div>
  );
};

export default App;
