import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.innerText;
    const { left, right, bottom } = e.target.getBoundingClientRect();
    const center = (left + right) / 2;
    const myBottom = bottom - 3;

    openSubMenu(page, { center, myBottom });
  };

  const handleSubmenu = (e) => {
    !e.target.classList.contains('link-btn') && closeSubMenu();
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='nav-logo' src={logo} alt='stripe' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
