import recipedata from "./recipe.json";
import "./styling.css"

function AuthorInfo() {
  const recipeAuthor = recipedata.map((data) => (
    <div key={data.name}>{data.author}</div>
  ));
  const recipeAuthorImage = recipedata.map((data) => (
    <div key={data.name}>
      <img src={data.authorImage} alt={data.author} className="authorImage" />
    </div>
  ))
  const recipeURL = recipedata.map((data) => (
    <a>{data.website}</a>
  ))
  
  return(
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeURL}
    </div>
  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 