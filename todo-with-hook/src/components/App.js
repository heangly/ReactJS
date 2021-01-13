import React from 'react';

import TodoApp from './TodoApp';
import TodosProvider from '../contexts/TodosContext';

const App = () => {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
};

export default App;
