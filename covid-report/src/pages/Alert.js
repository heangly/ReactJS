import React from 'react';
import { AppContext } from '../context/context';

const Alert = () => {
  const { posts } = React.useContext(AppContext);
  const renderAlert = posts.map((post) => {
    if (post.location.toLowerCase() === 'university city campus') {
      return (
        <div key={post.id} className='row justify-content-center mb-4'>
          <div className='each-alert p-3 col-md-6 text-center '>
            <div className='close-btn text-right'>
              <button className='btn btn-sm btn-danger'>
                {' '}
                <i className='fas fa-trash-alt'></i>
              </button>
            </div>
            <p className='text-white lead'>
              {' '}
              <i className='fas fa-user'></i> {post.user}
            </p>
            <p className='mt-4'>Location: {post.location}</p>
            <p>Date: {post.date}</p>
            <p>Contracted Virus: {post.contracted}</p>
          </div>
        </div>
      );
    }
    return [];
  });
  return (
    <div className='alert'>
      <h3 className='text-center mb-5'>
        {' '}
        <i className='fas fa-bell'></i> Alert
      </h3>
      {renderAlert}
    </div>
  );
};

export default Alert;
