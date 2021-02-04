import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSideBar = () => setIsSidebarOpen(true);
  const closeSideBar = () => setIsSidebarOpen(false);

  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text.toLowerCase());
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => setIsSubMenuOpen(false);

  return (
    <AppContext.Provider
      value={{
        location,
        isSidebarOpen,
        openSideBar,
        closeSideBar,
        isSubMenuOpen,
        closeSubMenu,
        openSubMenu,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { useGlobalContext, AppProvider };
