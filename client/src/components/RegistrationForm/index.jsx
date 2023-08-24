import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; 
import { NavLink, useNavigate} from 'react-router-dom';


const RegistrationForm = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
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
      const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
      console.log(response.data.message); 
       navigate('/login');
    } catch (error) {
      console.error(error.response.data.message); 
    }
  };

  return (
     
     <div className='flex'>
    <form className="registration-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
