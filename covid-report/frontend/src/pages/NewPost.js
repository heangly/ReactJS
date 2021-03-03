import React, { useEffect, useState } from 'react';
import { AppContext } from '../context/context';
import axios from 'axios';

const NewPost = ({ history }) => {
  const { loginUser, fetchData } = React.useContext(AppContext);
  const [location, setLocation] = useState('University City Campus');
  const [date, setDate] = useState('');
  const [contracted, setContracted] = useState('Yes');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    !user && history.push('/');
  }, [history, loginUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginUser.name && location && date && contracted) {
      const convertedDate =
        date.split('-')[1] +
        '/' +
        date.split('-')[2] +
        '/' +
        date.split('-')[0];

      try {
        await axios.post('/api/posts', {
          user: loginUser.name,
          location,
          date: convertedDate,
          contracted: contracted === 'Yes' ? true : false
        });
        fetchData();
        history.push('/');
      } catch (e) {
        console.log('Cannot Create Post');
      }
    }
    setDate('');
  };

  return (
    <div className='row justify-content-center '>
      <div className='new-post p-5 col-md-6'>
        <h3 className='text-center mb-3'>
          <i className='fas fa-plus'></i> New Post
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='location'>Location</label>
            <select
              className='form-control rounded'
              id='location'
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            >
              <option>University City Campus</option>
              <option>Center City Campus</option>
              <option>Queen Lane Campus</option>
              <option>Natural Sciences</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              className='form-control rounded'
              id='date'
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='contracted'>Contracted Virus</label>
            <select
              className='form-control rounded'
              id='contracted'
              onChange={(e) => setContracted(e.target.value)}
              value={contracted}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <button className='btn btn-outline-success btn-block mt-5 rounded'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
