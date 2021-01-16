import React, { useState } from 'react';

const QA = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='card-inner'>
      <div className='title'>
        <h3>{title}</h3>
        <i
          className={`fas fa-${show ? 'minus' : 'plus'}`}
          onClick={() => setShow(!show)}
        />
      </div>
      {show && <p>{info}</p>}
    </div>
  );
};

export default QA;
