import React, { useState } from 'react';
import InputBox from './InputBox';
import data from './data';
import './App.css';

const App = () => {
  const [para, setPara] = useState([]);

  const generateParagraph = (num) => {
    if (num <= 0 || num === '') {
      setPara([data[0]]);
    } else {
      setPara(data.slice(0, num));
    }
  };

  return (
    <div className='container'>
      <h1>Tired Of Boring Lorem Ipsum?</h1>
      <InputBox generateParagraph={generateParagraph} />
      <div className='main-content'>
        {para.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
