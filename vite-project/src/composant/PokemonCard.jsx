const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];



function PokeCard() {
    let pokemon = pokemonList[0];
    
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


