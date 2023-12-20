const RecipeDetails = ({ goBack, recipe }) => {
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <h1>{recipe.name}</h1>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction) => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </ol>
      <h2>Directions</h2>
      <p>{recipe.directions}</p>
    </div>
  );
};

export default RecipeDetails;


RecipeDetails.propTypes = {
  goBack: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    directions: PropTypes.string.isRequired,
  }).isRequired,
};