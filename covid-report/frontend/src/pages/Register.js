import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/context';

const Register = ({ history }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('University City Campus');
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

    if (password !== confirmPassword) {
      setError("Passwords Don't Mactch");
    }

    try {
      if (userName && password) {
        const { data } = await axios.post('/api/users/register', {
          userName,
          password,
          address
        });
        localStorage.setItem('loginUser', data.name);
        setLoginUser(data.name);
        history.push('/');
      }
    } catch (e) {
      setError('UserName Already Exist');
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
            <i className='fas fa-user-plus'></i> Register
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
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control rounded'
                id='password'
                placeholder='Enter Your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                className='form-control rounded'
                id='confirmPassword'
                placeholder='Enter Your Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='address'>Near By Address</label>
              <select
                className='form-control rounded'
                id='address'
                onChange={(e) => setAddress(e.target.value)}
              >
                <option>University City Campus</option>
                <option>Center City Campus</option>
                <option>Queen Lane Campus</option>
                <option>Natural Sciences Campus</option>
              </select>
            </div>

            <button className='btn btn-outline-success btn-block mt-4 rounded'>
              Submit
            </button>
          </form>
          <div className='mt-3 text-center' style={{ marginBottom: '-30px' }}>
            <p>
              Already Have An Account?{' '}
              <NavLink to='/login' className='text-white'>
                Login Here
              </NavLink>{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
