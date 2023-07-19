import styles from './Ingredients.module.css';


function RecipeIngredients(){
    let ingredients = ['Potatoes', 'Bacon', 'Chicken Stock', 'Onion', 'Milk']
    return (
        <div>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
};

export default RecipeIngredients