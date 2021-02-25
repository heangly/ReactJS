import React from 'react';
import { PokemonContext } from './context';
import Pokecard from './Pokecard';

const Pokedex = () => {
  const { pokemons, setPokemons } = React.useContext(PokemonContext);

  const handleNewRound = () => {
    const newPokemons = pokemons.sort(() => Math.random() - 0.5);
    setPokemons([...newPokemons]);
  };

  return (
    <div className='pokedex'>
      <button onClick={handleNewRound}>New Round</button>
      {pokemons.map((pokemon) => (
        <Pokecard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
};

export default Pokedex;
