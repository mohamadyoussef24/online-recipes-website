import React from 'react';
import './style.css'; 
import LoginForm from '../LoginForm';
import SearchPage from '../../pages/SearchPage';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/add">Add Recipe</a></li>
        <li><SearchPage /></li>
      </ul>
      <div className="auth-buttons">
        <button className="auth-button"><a href="/login">Login</a></button>
        <button className="auth-button"><a href="/register">Register</a></button>
        <button className="auth-button">Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
