import './styles.css';




function Button() {
   function onLearnMore(){
      alert("Water is good!")
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;