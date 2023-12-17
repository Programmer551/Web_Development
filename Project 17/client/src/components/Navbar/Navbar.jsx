import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <nav>
        <h1 className='heading'>Duraid's Website</h1>
        <ul>
          <li className='nav-li'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/register'>Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
