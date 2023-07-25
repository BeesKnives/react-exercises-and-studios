import recipedata from "./recipe.json";

function IngredientList() {
   return(
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((data) => {
        return(
          data.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>
          })
        )
      })}
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 