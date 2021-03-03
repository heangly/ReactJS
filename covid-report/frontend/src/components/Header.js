import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AppContext } from '../context/context';

const Header = () => {
  const { loginUser, setLoginUser } = React.useContext(AppContext);
  const history = useHistory();
  const handleLogout = () => {
    setLoginUser('');
    localStorage.removeItem('loginUser');
    history.push('/');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <i className='fas fa-virus' /> Covid Report
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor02'>
          <ul className='navbar-nav ml-auto text-center'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/'
                exact
                activeClassName='active-link'
              >
                <i className='fas fa-home'></i> Home
                <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            {loginUser.name && (
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/post'
                  activeClassName='active-link'
                >
                  <i className='fas fa-plus'></i> Post
                </NavLink>
              </li>
            )}
            {loginUser.name && (
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/alert'
                  activeClassName='active-link'
                >
                  <i className='fas fa-bell'></i> Alert{' '}
                  <span className='badge badge-success'>0</span>
                </NavLink>
              </li>
            )}
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/about'
                activeClassName='active-link'
              >
                <i className='fas fa-question-circle'></i> About
              </NavLink>
            </li>

            {loginUser.name ? (
              <li className='nav-item dropdown'>
                <span
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='fas fa-user' /> {loginUser.name.split(' ')[0]}{' '}
                </span>
                <div className='dropdown-menu' style={{ cursor: 'pointer' }}>
                  <span className='dropdown-item' onClick={handleLogout}>
                    <i className='fas fa-sign-out-alt'></i> Logout
                  </span>
                </div>
              </li>
            ) : (
              <li className='nav-item dropdown'>
                <span
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  style={{ width: '130px' }}
                >
                  <i className='fas fa-user' /> Account
                </span>
                <div className='dropdown-menu'>
                  <NavLink
                    className='dropdown-item'
                    to='/login'
                    activeClassName='dropdown-item-active'
                  >
                    <i className='fas fa-sign-out-alt'></i> Login
                  </NavLink>
                  <NavLink
                    className='dropdown-item'
                    to='/register'
                    activeClassName='dropdown-item-active'
                  >
                    <i className='fas fa-user-plus'></i> Register
                  </NavLink>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
