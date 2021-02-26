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
      <h4>{name}</h4>
      <img src={`${url}${id}.png`} alt={name} />
      <p>Type: {type}</p>
      <p className='exp'>EXP: {base_experience}</p>
    </div>
  );
};
export default Pokecard;
