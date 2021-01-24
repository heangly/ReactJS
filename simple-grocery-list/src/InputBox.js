import React, { useState, useEffect } from 'react';

const InputBox = ({
  listValueHandler,
  editValue,
  edit,
  confirmEditHandler,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [editInput, setEditInput] = useState('');

  useEffect(() => {
    editValue.value && setEditInput(editValue.value);
  }, [editValue]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue) {
      listValueHandler(inputValue);
      setInputValue('');
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    confirmEditHandler({ id: editValue.id, value: editInput });
    setEditInput('');
  };

  return (
    <>
      {!edit ? (
        <form className='input-box' onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='btn'>Submit</button>
        </form>
      ) : (
        <form className='input-box' onSubmit={editHandler}>
          <input
            type='text'
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button style={{ background: '#90ee90' }}>Edit</button>
        </form>
      )}
    </>
  );
};

export default InputBox;
