import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/appointment">Appointment</Link></li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </>

    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <Link to="/" class="btn btn-ghost normal-case text-2xl text-primary">Health Care</Link>
  </div>
  <div class="navbar-end">
    <li className='font-bold uppercase' style={{
      listStyle: "none",
      marginRight: "15px"

    }}><Link to="/login">Login</Link></li>
    
  </div>
</div>
    );
};

export default Header;