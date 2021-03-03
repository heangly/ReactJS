import React, { useEffect } from 'react';
import { AppContext } from '../context/context';
import axios from 'axios';

const Alert = ({ history }) => {
  const { loginUser, fetchData, setLoginUser } = React.useContext(AppContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    !user && history.push('/');
  }, [history, loginUser]);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/alerts/${loginUser.name}/${id}`
      );
      fetchData();
      setLoginUser({ ...loginUser, alert: data.alert });

      localStorage.setItem(
        'loginUser',
        JSON.stringify({
          name: loginUser.name,
          address: loginUser.address,
          alert: data.alert
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='alert'>
      <h3 className='text-center mb-5'>
        {' '}
        <i className='fas fa-bell'></i> Alert (
        {loginUser.alert && loginUser.alert.length})
      </h3>
      {loginUser.alert &&
        loginUser.alert.map((alert) => {
          return (
            <div key={alert._id} className='row justify-content-center mb-4'>
              <div className='each-alert p-3 col-md-6 text-center '>
                <div className='close-btn text-right'>
                  <button
                    className='btn btn-sm btn-danger'
                    onClick={() => handleDelete(alert._id)}
                  >
                    {' '}
                    <i className='fas fa-trash-alt'></i>
                  </button>
                </div>
                <h5>
                  {' '}
                  <i className='fas fa-user'></i> {alert.name}
                </h5>
                <p className='mt-4'>Location: {alert.location}</p>
                <p>Date: {alert.date}</p>
                <p>Contracted Virus: {alert.contracted ? 'Yes' : 'No'}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Alert;
