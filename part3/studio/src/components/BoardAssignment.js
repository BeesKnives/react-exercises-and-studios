import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         "label": "Pasta",
         "value": "Pasta Board"
      },
      {
         "label": "Cheese",
         "value": "Cheese Board"
      },
      {
         "label": "Sauce",
         "value": "Sauce Board"
      }
   ];

   const [boardName, setName]= useState('no boards yet!')

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) =>{
            return(
            <option value={board.value}>{board.label}</option>
            )
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}