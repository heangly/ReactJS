import React, { useState } from "react";
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
    {id:1, task: 'wash Car', completed: true},
    {id:1, task: 'Grow Beard', completed: false},
  ]

  const [todos, setTodos] = useState(intialTodos);

  const addTodo = newTodoText => {
    setTodos([{id:4, task: newTodoText, completed:false}, ...todos])
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
      
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}/>

    </Paper>
  )
}

export default TodoApp;