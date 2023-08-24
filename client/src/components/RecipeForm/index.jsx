import React, { useState } from 'react';
import './style.css';

function RecipeForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('cuisine', cuisine);
    formData.append('ingredients', ingredients);
    formData.append('image', image);

    onSubmit(formData);
  };

  return (
    
      <form onSubmit={handleSubmit} className="form-container">
        <label className="label">
          Recipe Name:
          <input className="input-field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="label">
          Cuisine:
          <input className="input-field" type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
        </label>
        <label className="label">
          Ingredients:
          <textarea className="textarea-field" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </label>
        <label className="label">
          Image:
          <input className="input-field" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <button className="submit-button" type="submit">Add Recipe</button>
      </form>
    );
}

export default RecipeForm;
