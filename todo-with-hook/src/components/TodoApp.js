import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'react-uuid';
//
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || [
    { id: uuid(), task: 'Clean Fishtank', completed: false },
    { id: uuid(), task: 'Wash Car', completed: true },
    { id: uuid(), task: 'Grow Beard', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuid(), task, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
  };

  const editTodo = (todoId, task) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task } : todo
    );
    setTodos(updatedTodo);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={6}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
