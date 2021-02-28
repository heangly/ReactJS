import React from 'react';
import { posts, users } from '../data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ posts, users }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
