


function PokeCard({pokemon}) {
  
    
    return (
      <div>
       <figure>
        {pokemon.imgSrc? <img src={pokemon.imgSrc}/>:<p>???</p>}
        

       </figure>
       <figcaption> {pokemon.name? pokemon.name:<p>???</p>}</figcaption>

      </div>

    );
  }

  
  
  export default PokeCard;


