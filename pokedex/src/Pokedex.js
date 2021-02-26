import React, { useState } from 'react';
import { PokemonContext } from './context';
import Pokecard from './Pokecard';

const Pokedex = () => {
  const { pokemons, setPokemons } = React.useContext(PokemonContext);
  const halfPokemons = Math.floor(pokemons.length / 2);
  const [firstHand, setFirstHand] = useState(pokemons.slice(0, halfPokemons));
  const [secondHand, setSecondHand] = useState(pokemons.slice(halfPokemons));

  const handleNewRound = () => {
    const newPokemons = pokemons.sort(() => Math.random() - 0.5);
    setPokemons([...newPokemons]);
    setFirstHand(newPokemons.slice(0, halfPokemons));
    setSecondHand(newPokemons.slice(halfPokemons));
  };

  const firstHandTotalExp = firstHand.reduce(
    (acc, curr) => acc + curr.base_experience,
    0
  );

  const secondHandTotalExp = secondHand.reduce(
    (acc, curr) => acc + curr.base_experience,
    0
  );

  return (
    <>
      <button onClick={handleNewRound}>New Round</button>
      <div className='pokedex'>
        {firstHandTotalExp > secondHandTotalExp ? (
          <h3 style={{ color: 'limegreen' }}>Winning Hand</h3>
        ) : (
          <h3 style={{ color: 'crimson' }}>Losing Hand</h3>
        )}
        <p>
          Total experience:{' '}
          <span className='total-exp'> {firstHandTotalExp} </span>
        </p>
        <div className='firstHand'>
          {firstHand.map((pokemon) => (
            <Pokecard key={pokemon.id} {...pokemon} />
          ))}
        </div>

        {secondHandTotalExp > firstHandTotalExp ? (
          <h3 style={{ color: 'limegreen' }}>Winning Hand</h3>
        ) : (
          <h3 style={{ color: 'crimson' }}>Losing Hand</h3>
        )}
        <p>
          Total experience:{' '}
          <span className='total-exp'>{secondHandTotalExp}</span>{' '}
        </p>
        <div className='secondHand'>
          {secondHand.map((pokemon) => (
            <Pokecard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokedex;
