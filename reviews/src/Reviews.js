import React, { useState } from 'react';
import data from './data';
import Review from './Review';

const Reviews = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const nextHandler = () => {
    if (index < people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(people.length - 1);
    }
  };

  const surpriseHandler = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  return (
    <div className='card'>
      <Review {...people[index]} />
      <div className='btn-next'>
        <button className='btn' onClick={prevHandler}>
          <i className='fas fa-chevron-left'></i>
        </button>
        <button className='btn' onClick={nextHandler}>
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>

      <button className='btn surprise' onClick={surpriseHandler}>
        Suprise Me
      </button>
    </div>
  );
};

export default Reviews;
