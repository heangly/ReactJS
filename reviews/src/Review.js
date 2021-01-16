import React from 'react';

const Review = ({ image, job, name, text }) => {
  return (
    <>
      <img src={image} alt={name} />
      {/* <i class='fas fa-quote-right' /> */}
      <h3 className='name'>{name}</h3>
      <h3 className='job'>{job}</h3>
      <p>{text}</p>
    </>
  );
};

export default Review;
