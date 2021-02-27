import React from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ hello: 'hi' }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
