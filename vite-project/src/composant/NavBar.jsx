

import React from 'react';






function NavBar({pokemonList,setPokemonIndex,pokemonIndex}) {


    const handlePrevious = () => {
        setPokemonIndex(prevIndex => Math.max(prevIndex - 1, 0));
      };
    
      const handleNext = () => {
        setPokemonIndex(prevIndex => Math.min(prevIndex + 1, pokemonList.length - 1));
      };
  return (


    <nav>
       {pokemonIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Next</button>}
    </nav>
  );
}

export default NavBar;