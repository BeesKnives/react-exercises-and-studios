import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://sugarspunrun.com/creamy-potato-soup-recipe/";
    let authorPhoto = "https://sugarspunrun.com/wp-content/uploads/2021/02/SquareImage_Sam.jpg";
    let authorName = "Sam Cookingblog";
    return (
        <div className = {styles.recipeAuthorBlock}> 
            <img src={authorPhoto} alt = "Blond lady holding a cookie" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Sugarspunrun</a>
            </div>
        </div>
    );
};


class RecipeDescription extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <h1>Potato Soup Recipe</h1>
                    <p>Soup made with potatoes.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
       
    };
};


export default RecipeDescription;



