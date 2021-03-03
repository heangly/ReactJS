import React, { useEffect } from 'react';
import { AppContext } from '../context/context';

const Alert = ({ history }) => {
  const { posts, loginUser } = React.useContext(AppContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    !user && history.push('/');
  }, [history, loginUser]);

  const renderAlert = posts.map((post) => {
    if (post.location === loginUser.address && post.user !== loginUser.name) {
      return (
        <div key={post._id} className='row justify-content-center mb-4'>
          <div className='each-alert p-3 col-md-6 text-center '>
            <div className='close-btn text-right'>
              <button className='btn btn-sm btn-danger'>
                {' '}
                <i className='fas fa-trash-alt'></i>
              </button>
            </div>
            <h5>
              {' '}
              <i className='fas fa-user'></i> {post.user}
            </h5>
            <p className='mt-4'>Location: {post.location}</p>
            <p>Date: {post.date}</p>
            <p>Contracted Virus: {post.contracted ? 'Yes' : 'No'}</p>
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
