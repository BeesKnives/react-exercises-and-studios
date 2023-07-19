import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description.js'
import RecipeIngredients from './components/RecipeIngredients.js'
import RecipePhoto from './components/Photos.js'

function App() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;
