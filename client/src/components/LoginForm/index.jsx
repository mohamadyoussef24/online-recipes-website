import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; 
import { NavLink, useNavigate} from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate(); 

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', userData);
      console.log(response.data.message); 
       navigate('/');
    } catch (error) {
      console.error(error.response.data.message); 
    }
  };

  return (
    <div className='flex'>
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
      <button type="submit">Login</button><br />
      <div>you don't have account ? <NavLink className='text-btn' to='/register'>Sign up</NavLink></div>
    </form>
    </div>
  );
};

export default LoginForm;
