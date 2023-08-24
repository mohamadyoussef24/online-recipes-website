import React from 'react';
import './style.css';
function RecipeCard({ recipe, selected, onSelect }) {
  const cardClassName = selected ? 'recipe-card selected' : 'recipe-card';

  return (
    <div className="recipe-card" onClick={onSelect}>
      <h3>{recipe.name}</h3>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <img src={recipe.image} alt={recipe.name} />
    </div>
  );
}

export default RecipeCard;
