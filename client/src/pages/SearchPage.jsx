import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar/index';
import SearchResults from '../components/SearchResults';

function SearchPage() {
  const [results, setResults] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSearch = async (recipe) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/recipes/search/{recipe}`);
      setResults(response.data.results);
      setSelectedRecipeId(null); 
    } catch (error) {
      
      console.error('Error searching recipes:', error.response.data.errors);
    }
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipeId(recipe);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} selectedRecipeId={selectedRecipeId} onSelectRecipe={handleSelectRecipe} />
    </div>
  );
}

export default SearchPage;

