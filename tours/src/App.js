import React, { useEffect, useState } from 'react';
import './App.css';
import Tour from './Tour';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch('https://course-api.com/react-tours-project');
      const data = await rawData.json();
      setTours(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  const interestHandler = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div className='container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Our Tours</h1>
          <div className='line'></div>
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} interestHandler={interestHandler} />
          ))}
        </>
      )}

      {!tours.length && (
        <button className='btn' onClick={() => setLoading(true)}>
          Refresh
        </button>
      )}
    </div>
  );
};

export default App;
