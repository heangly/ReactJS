import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from './hooks/useInputState';

const TodoForm = ({addTodo}) => {
  const [value, handleChange, reset] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  }

  return(
    <Paper style={{margin:'1rem 0', padding:'0'}}>
      <form onSubmit={handleSubmit}>
        <TextField 
          style={{margin:'10px', width:'96%'}}
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
        />
      </form>
    </Paper>
  )
}



export default TodoForm;