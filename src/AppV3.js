import { useState } from "react";

import PokemonCard from "./components/PokemonCard/PokemonCard";

const POKEMON_DB = [
  {
    name: "Charmander",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    type: "fire",
  },
  {
    name: "Bulbasur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "grass",
  },
  {
    name: "Squartle",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    type: "water",
  }
];

const AppV3 = () => {

  const [list, setList] = useState([]);


  // callback
  const handleClick = (name) => {
    // IMPLENATACION
    setList( [...list ,name] ); // spread operator
  }

  // util
  const mostFamousPokemon = () => {
    // list

    const map = {
      
    };

    let maxAux = -1;
    let maxPokemonName = "";
    for(let i = 0; i < list.length; i++) {

      const pokemonName = list[i];

      if(map[pokemonName]) {
        map[pokemonName] = map[pokemonName] + 1;
      }
      else {
        map[pokemonName] = 1;
      }

      if(map[pokemonName] > maxAux) {
        maxAux = map[pokemonName];
        maxPokemonName = pokemonName;
      }

    }
    
    return maxPokemonName;
  }

  return (
    <div>
        {POKEMON_DB.map((pokemon) => {
          const { name, type, img } = pokemon;
          return (
            <PokemonCard
              key={name}
              name={name} 
              value={10}
              img={img} 
              type={type} 
              onClick={handleClick}
            />
          );

        })}
      <h2>{mostFamousPokemon()}</h2>
    </div>
  );

}

export default AppV3;