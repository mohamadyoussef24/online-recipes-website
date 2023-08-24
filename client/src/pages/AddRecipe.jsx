import React from 'react';
import RecipeForm from '../components/RecipeForm';
import axios from 'axios';
import { NavLink, useNavigate} from 'react-router-dom';


function AddRecipe() {

  const navigate = useNavigate(); 

    const handleSubmit = async (formData) => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/recipes', formData, {
            headers: {
              'Content-Type': 'multipart/form-data', 
            },
          });
    
         
          console.log('Recipe added successfully:', response.data);
          navigate('/');
    
        } catch (error) {
          
          console.error('Error adding recipe:', error.response.data.errors);
        }
      };

  return (
    <div>
      <h2 className='tagilo'>Add a New Recipe</h2>
      <RecipeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddRecipe;
