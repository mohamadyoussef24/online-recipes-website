import React from 'react';
import RecipeCard from '../RecipeCard';
import './style.css';

function SearchResults({ results, selectedRecipeId, onSelectRecipe }) {
  return (
    <div className="">
      {results.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          selected={recipe.id === selectedRecipeId}
          onSelect={() => onSelectRecipe(recipe.id)}
        />
      ))}
    </div>
  );
}

export default SearchResults;

