import React from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
//
import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm task={task} id={id} editTodo={editTodo} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={{ textDecoration: completed && 'line-through' }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete'>
              <DeleteIcon onClick={() => removeTodo(id)} />
            </IconButton>
            <IconButton aria-label='Edit'>
              <EditIcon onClick={toggle} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
