import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <h3 className='text-center mb-5'>
        {' '}
        <i className='fas fa-question-circle'></i> About
      </h3>
      <p className='lead'>
        COVID Report is a web application that allows you to get information
        about the location where COVID case is occurring. Also, you can alert
        everyone about time and location that you may have been infectious. The
        locations are 4 sites of Drexel University in Philadelphia,
        Pennsylvania—the University City Campus, the Center City Campus, the
        Queen Lane Campus, and the Academy of Natural Sciences.
      </p>
    </div>
  );
};

export default About;
