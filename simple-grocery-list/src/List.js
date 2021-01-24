import React, { useState } from 'react';

const List = ({ id, value, editItemHandler, deleteItemHandler }) => {
  const [fade, setFade] = useState(false);

  const deleteHandler = () => {
    setFade(true);
    setTimeout(() => {
      deleteItemHandler(id);
    }, 500);
  };

  return (
    <div className={`list ${fade && 'fade'}`}>
      <p>{value}</p>
      <div className='btn-groups'>
        <button className='btn-edit' onClick={() => editItemHandler(id)}>
          <i className='far fa-edit'></i>
        </button>
        <button className='btn-delete' onClick={deleteHandler}>
          <i className='far fa-trash-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default List;
