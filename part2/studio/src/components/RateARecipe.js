let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

  function pickStars() {
    return (
      <div>
        <h3>{stars[(props.rating) - 1]}</h3>
      </div>
    );
  };
  
  function outOfBounds() {
    alert("Rating must be between 1 and 5");
    return null;
  };

  
  (props.rating > 5 || props.rating < 1) ? outOfBounds() : pickStars();
  
};

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
