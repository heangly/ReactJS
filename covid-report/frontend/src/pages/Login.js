import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/context';

const Login = ({ history }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setLoginUser } = React.useContext(AppContext);

  useEffect(() => {
    const id = setTimeout(() => {
      setError('');
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (userName && password) {
        const { data } = await axios.post('/api/users', {
          userName,
          password
        });

        localStorage.setItem(
          'loginUser',
          JSON.stringify({
            name: data.name,
            address: data.address,
            alert: data.alert
          })
        );
        setLoginUser({
          name: data.name,
          address: data.address,
          alert: data.alert
        });
        history.push('/');
      }
    } catch (e) {
      console.log('Incorrect username or password', e);
      setError('Incorrect UserName or Password');
    }

    setUserName('');
    setPassword('');
  };

  return (
    <>
      {error && (
        <div className='alert alert-danger mb-5 rounded' role='alert'>
          {error}
        </div>
      )}
      <div className='row justify-content-center '>
        <div className='new-post p-5 col-md-6'>
          <h3 className='text-center mb-3'>
            <i className='fas fa-sign-out-alt'></i> Login
          </h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control rounded'
                id='name'
                placeholder='Enter Your User Name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='name'>Password</label>
              <input
                type='password'
                className='form-control rounded'
                id='password'
                placeholder='Enter Your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className='btn btn-outline-success btn-block mt-4 rounded'>
              Submit
            </button>
          </form>
          <div className='mt-3 text-center' style={{ marginBottom: '-30px' }}>
            <p>
              New User?{' '}
              <NavLink to='/register' className='text-white'>
                Register Here
              </NavLink>{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
