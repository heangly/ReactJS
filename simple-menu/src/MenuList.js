import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import data from './data';

const MenuList = () => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const uniqueCategory = ['all'];
    for (const { category } of data) {
      if (!uniqueCategory.includes(category)) {
        uniqueCategory.push(category);
      }
    }
    setCategories(uniqueCategory);
  }, []);

  return (
    <div className='menu-list'>
      {categories.map((category, index) => (
        <button
          key={index}
          className='category'
          onClick={() => setFilter(category)}
        >
          {category}
        </button>
      ))}

      <div className='menu'>
        {data.map((d) => {
          if (filter === 'all' || d.category === filter) {
            return <Menu key={d.id} {...d} />;
          }
          return [];
        })}
      </div>
    </div>
  );
};

export default MenuList;
