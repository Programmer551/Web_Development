import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const token = localStorage.getItem("Login_Token");
  const initialBool = token === null ? true : false;
  const [bool, setBool] = useState(initialBool);
  const [bool2, setBool2] = useState(initialBool);
  useEffect(() => {
    setBool2(!bool2);
  }, [bool]);

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
          {bool2 ? (
            <li className='nav-li'>
              <NavLink to='/logout'>Logout</NavLink>
            </li>
          ) : (
            <>
              <li className='nav-li'>
                <NavLink to='/login'>Login</NavLink>
              </li>
              <li className='nav-li'>
                <NavLink to='/register'>Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
