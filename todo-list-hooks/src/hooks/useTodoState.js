import {useState} from 'react';
import {v4 as uuid} from 'uuid';

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return{
    todos,

    addTodo: newTodoText => {
      setTodos([{id:uuid(), task: newTodoText, completed:false}, ...todos])
    },

    removeTodo: todoId => {
      //filter out removed todo
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },

    toggleTodo : todoId => {
      const updatedTodos = todos.map(todo => 
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      );
      setTodos(updatedTodos);
    },

    editTodo : (todoId, newTask) => {
      const updatedTodos = todos.map(todo => (
        todo.id === todoId ? {...todo, task: newTask} : todo
      ));
      setTodos(updatedTodos);
    }
    
  }
}





