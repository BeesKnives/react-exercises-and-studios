export default function BookList() {
   let pageTitle = "Books by Brandon Sanderson:";
   let book1 = "https://m.media-amazon.com/images/I/81dM5-PSE3L._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51kyByMUf+L.jpg";
   let book3 = "https://b1512865.smushcdn.com/1512865/wp-content/uploads/2019/11/Way-of-Kings.jpg?lossy=1&strip=1&webp=1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Mistborn" />
         <img src={book2} alt="Warbreaker" />
         <img src={book3} alt="The Stormlight Archive" />
      </div>      
   );
}