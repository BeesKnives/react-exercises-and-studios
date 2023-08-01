import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes]= useState("");
   const [recipeStatus, setRecipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true);
   }

   const triedRecipe = () => {
      if (recipeStatus === true){
         return (<p>I have tried this recipe.</p>)
      } else {
         return (<p>I have not tried this recipe!</p>)
      }
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         <p>My Recipe Notes:</p>
         <p>{notes}</p>
         <p>{triedRecipe()}</p>
         
         
      </div>
   );
}