const RecipeList = ({ setRecipe, recipes }) => {
  return (
    <div>
      {recipes.map(recipe => {
        return (
          <div key={recipe.id} onClick={() => setRecipe(recipe.id)}>
            <p>{recipe.name}</p>
          </div>
        );
      })}
    </div>
  )
}

export default RecipeList