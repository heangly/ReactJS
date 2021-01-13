import React, { useState } from 'react';
import './List.css';

const List = ({ data }) => {
  const [people, setPeople] = useState(data);

  return (
    <div className='card-container'>
      <div className='card'>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          {' '}
          {people.length} birthdays today
        </h2>
        {people.map(({ id, name, age, image }) => (
          <div key={id} className='item'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        ))}
        {people.length ? (
          <button className='btn' onClick={() => setPeople([])}>
            Clear All
          </button>
        ) : (
          <button className='btn' onClick={() => setPeople(data)}>
            Restore All
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
