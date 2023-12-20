import { useState, useEffect } from 'react'
import './App.css'
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import mockData from './constants/mockData';

/*

  DATA:
  array of recipes
  type Recipes = Recipe[] | Array<Recipe>

  recipe object
  type Recipe = {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    directions: string
  }

  Views:
  - Home Page - A list of recipes
  - Recipe Details
  Maybe a modal ??? 
  - Add Recipe Form View
*/

function App() {
  const [recipes, setRecipes] = useState(mockData)
  const [recipeId, setRecipeId] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState({});

  function goBack() {
    setRecipeId({});
  }

  useEffect(() => {

    if (!recipeId) return;
    const selectedRecipe = recipes.find(recipe => recipe.id === recipeId);
    setSelectedRecipe(selectedRecipe);
  }, [recipeId]);


  return (
    <div>
      {selectedRecipe ? 
        <RecipeDetails goBack={goBack} selectedRecipe={selectedRecipe} /> :
        <RecipeList setRecipe={setRecipeId} recipes={recipes} />
      }
    </div>
  )
}

export default App
