import React from 'react';

const Slider = ({ image, name, title, quote, active, changePersonHandler }) => {
  return (
    <div className={`slider ${active}`}>
      <img src={image} alt={name} />

      <div className='slider-name-container'>
        <button onClick={() => changePersonHandler('prev')}>
          <i className='fas fa-chevron-left'></i>{' '}
        </button>
        <div>
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
        <button onClick={() => changePersonHandler('next')}>
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>

      <p>{quote}</p>
      <i className='fas fa-quote-right'></i>
    </div>
  );
};

export default Slider;
