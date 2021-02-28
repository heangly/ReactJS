import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <i className='fas fa-virus' /> Covid Report
        </Link>
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
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/post'
                activeClassName='active-link'
              >
                <i className='fas fa-bullhorn'></i> Post
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/alert'
                activeClassName='active-link'
              >
                <i className='fas fa-bell'></i> Alert{' '}
                <span className='badge badge-light'>0</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/about'
                activeClassName='active-link'
              >
                <i className='fas fa-question-circle'></i> About
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <span
                className='nav-link dropdown-toggle'
                data-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <i className='fas fa-user' /> John
              </span>
              <div className='dropdown-menu'>
                <NavLink className='dropdown-item' to='/setting'>
                  Setting
                </NavLink>
                <NavLink className='dropdown-item' to='/login'>
                  Logout
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
