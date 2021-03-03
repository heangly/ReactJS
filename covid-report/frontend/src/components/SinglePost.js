import React from 'react';
import { AppContext } from '../context/context';
import axios from 'axios';

const SinglePost = ({ id, user, location, date, contracted, img }) => {
  const { loginUser, fetchData } = React.useContext(AppContext);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className='single-post mb-4'>
      <div className='row'>
        <div className='col-lg-6 image'>
          <img src={img} alt='' />
        </div>
        <div className='col-lg-6'>
          <div className='py-3 '>
            <h5 className='text-center'>
              <i className='fas fa-user'></i> {user}
            </h5>
            <div className='info mt-3'>
              <span>
                <span className='text-bold'>
                  {' '}
                  <i className='fas fa-map'></i> Visited Location:
                </span>{' '}
                {location}
              </span>
              <span>
                <span className='text-bold'>
                  <i className='fas fa-calendar-alt'></i> Visited Date:{' '}
                </span>
                {date}
              </span>
              <span>
                <span className='text-bold'>
                  <i className='fas fa-virus'></i> Contracted Virus:{' '}
                </span>
                {contracted ? 'Yes' : 'No'}
              </span>
            </div>
            {loginUser.name === user && (
              <div className='text-right mr-3'>
                <button
                  className='btn btn-sm rounded btn-danger'
                  onClick={handleDelete}
                >
                  <i className='fas fa-trash-alt'></i> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
