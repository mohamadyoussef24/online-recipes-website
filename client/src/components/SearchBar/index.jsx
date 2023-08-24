import React, { useState } from 'react';
import './style.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes by name, cuisine, or ingredients..."
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

