import React, { createContext } from 'react';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  return <TodosContext.Provider value={'hi'}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
