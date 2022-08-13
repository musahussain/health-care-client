import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
  const logout = () => {
    signOut(auth);
  };

  const [user, loading] = useAuthState(auth);
    const menuItems = <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/appointment">Appointment</Link></li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/" className="btn btn-ghost normal-case text-2xl text-primary">Health Care</Link>
  </div>
  <div className="navbar-end">
    <li className='font-bold uppercase' style={{
      listStyle: "none",
      marginRight: "15px"

    }}>{user? <button onClick={logout} className='btn btn-outline'>Sign Out</button> : <Link className='btn btn-outline' to="/login">Login</Link>}</li>
    
  </div>
</div>
    );
};

export default Header;