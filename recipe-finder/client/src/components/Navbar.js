import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css'

class Navbar extends Component{
  render(){
    return(
      <div className='Navbar'>
        <nav>
          <NavLink className='Navbar-brand' to='/recipes'>
            <i className="fas fa-utensils"></i> RF
          </NavLink>

          <ul className='Navbar-menu'>
            <NavLink activeClassName='active-link' to='/recipes'>
                Home
            </NavLink>
            <NavLink activeClassName='active-link' to='/recipes/top5'>
                Top 5
            </NavLink>
          </ul>
        </nav>
      </div>
    )
  }  
}

export default Navbar;