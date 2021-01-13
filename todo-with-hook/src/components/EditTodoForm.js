import React from 'react';
import { TextField } from '@material-ui/core';
//
import useInputState from '../hooks/useInputState';

const EditTodoForm = ({ id, task, editTodo, toggle }) => {
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        fullWidth
        margin='normal'
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default EditTodoForm;
