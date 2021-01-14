import React, { useState } from 'react';

// id, image, info, name, price;
const Tour = ({ id, image, info, name, price, interestHandler }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='card'>
      <img src={image} alt='' />
      <div className='content'>
        <div className='tour-title'>
          <h3>{name}</h3>
          <h3 className='price'>${price}</h3>
        </div>
        <p>
          {readMore ? info : info.slice(0, 200)} ...{' '}
          <button className='btn-show' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'show more'}
          </button>
        </p>
      </div>
      <button className='btn' onClick={() => interestHandler(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
