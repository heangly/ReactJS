import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
// import useTodoState from "./hooks/useTodoState";

const TodoApp = () => {
  const intialTodos = [
    {id:1, task: 'Clean Fishtank', completed: false},
    {id:2, task: 'wash Car', completed: true},
    {id:3, task: 'Grow Beard', completed: false},
  ]

  const [todos, setTodos] = useState(intialTodos);

  const addTodo = newTodoText => {
    setTodos([{id:uuid(), task: newTodoText, completed:false}, ...todos])
  }

  const removeTodo = todoId => {
    //filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => 
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(updatedTodos);
  }

  return(
    <Paper
      style={{
        padding:0,
        margin:0,
        height:'100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{height:'64px'}}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify='center' style={{marginTop:'1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo} 
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>

    </Paper>
  )
}

export default TodoApp;