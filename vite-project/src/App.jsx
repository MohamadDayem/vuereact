import React, { useState, useEffect } from 'react';
import PokeCard from './composant/PokemonCard';
import NavBar from './composant/NavBar';
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

  useEffect(() => {

    alert("Hello Pokemon Trainer :)");
  }, []);

  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} />
      <PokeCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
