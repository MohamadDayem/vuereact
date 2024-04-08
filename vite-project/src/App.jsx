import React, { useState } from 'react';
import PokeCard from './composant/PokemonCard';
import './App.css';

const pokemonList = [
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    setPokemonIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setPokemonIndex(prevIndex => Math.min(prevIndex + 1, pokemonList.length - 1));
  };

  return (
    <div>
      {pokemonIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Next</button>}
      <PokeCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
