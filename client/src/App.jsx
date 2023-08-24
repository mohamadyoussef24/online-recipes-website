import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route, BrowserRouter } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm/index';
import LoginForm from './components/LoginForm/index';
import RecipeForm from './components/RecipeForm';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';
import RecipeCard from './components/RecipeCard';
import SearchPage from './pages/SearchPage';





const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<RecipeDetails />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/add' element={<AddRecipe />} />
        <Route path='/search' element={<SearchPage />} />
      </Route>
      <Route path='*' element={<h1>404 shuu bekk</h1>} />
    </Routes>
    
    
    </BrowserRouter>
    
  
  );
};

export default App;
