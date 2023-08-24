import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import '../pages/RecipeDetails.css';
import Navbar from '../components/NavBar';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/recipes');
        setRecipes(response.data.recipes);
        setLoading(false);
      } catch (error) {
        
        console.error('Error fetching recipes:', error.response.data.errors);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div><Navbar /></div>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;

