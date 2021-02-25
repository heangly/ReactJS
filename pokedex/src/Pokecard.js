import React from 'react';

const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const Pokecard = ({ id, name, type, base_experience }) => {
  const convertToThreeDigits = (number, length) => {
    let len = length - ('' + number).length;
    return (len > 0 ? new Array(++len).join('0') : '') + number;
  };

  id = convertToThreeDigits(id, 3);

  return (
    <div className='pokecard'>
      <h1>{name}</h1>
      <img src={`${url}${id}.png`} alt={name} />
    </div>
  );
};
export default Pokecard;
