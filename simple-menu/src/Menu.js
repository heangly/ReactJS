import React from 'react';

const Menu = ({ title, img, price, desc }) => {
  return (
    <div className='menu-item'>
      <img src={img} alt={title} />
      <div>
        <div className='menu-title'>
          <h2 className='title'>{title}</h2>
          <h2 className='menu-price'>${price}</h2>
        </div>
        <p className='menu-desc'>{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
