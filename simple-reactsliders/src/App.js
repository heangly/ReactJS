import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import data from './data';
import './App.css';

function App() {
  const [idx, setIdx] = useState(0);
  const [people, setPeople] = useState(data);

  useEffect(() => {
    if (idx < 0) {
      setIdx(people.length - 1);
    } else if (idx > people.length - 1) {
      setIdx(0);
    }
  }, [idx, people]);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx(idx + 1);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [idx]);

  const changePersonHandler = (type) => {
    if (type === 'prev') {
      setIdx(idx - 1);
    } else {
      setIdx(idx + 1);
    }
  };

  return (
    <div className='container'>
      <h1>Reviews</h1>
      <div className='slider-container'>
        {people.map((person, index) => (
          <Slider
            key={person.id}
            active={idx === index && 'active'}
            changePersonHandler={changePersonHandler}
            {...person}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
