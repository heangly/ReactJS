import React, { useState } from 'react';
import InputBox from './InputBox';
import List from './List';
import './App.css';

const App = () => {
  const [listValues, setListValues] = useState([]);
  const [id, setId] = useState(0);
  const [editValue, setEditValue] = useState({});
  const [edit, setEdit] = useState(false);

  const listValueHandler = (value) => {
    setListValues([...listValues, { id, value }]);
    setId(id + 1);
  };

  const clearItemsHandler = () => {
    listValues.length && setListValues([]);
  };

  const editItemHandler = (id) => {
    setEdit(true);
    const obj = listValues.filter((list) => list.id === id);
    setEditValue({ id, value: obj[0].value });
  };

  const confirmEditHandler = (obj) => {
    setEdit(false);
    for (let v of listValues) {
      if (v.id === obj.id) {
        v.value = obj.value;
      }
    }
  };

  const deleteItemHandler = (id) => {
    const newListValues = listValues.filter((list) => list.id !== id);
    setListValues(newListValues);
    setEdit(false);
  };

  return (
    <div className='container'>
      <h1>Grocery Bud</h1>
      <InputBox
        listValueHandler={listValueHandler}
        editValue={editValue}
        edit={edit}
        confirmEditHandler={confirmEditHandler}
      />
      <div className='list-container'>
        {listValues.map((list) => (
          <List
            key={list.id}
            {...list}
            editItemHandler={editItemHandler}
            deleteItemHandler={deleteItemHandler}
          />
        ))}
        <button className='btn-clear' onClick={clearItemsHandler}>
          Clear Items
        </button>
      </div>
    </div>
  );
};

export default App;
