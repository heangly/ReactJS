import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [posts, setPost] = useState([]);
  const [location, setLocation] = useState({
    'University City Campus': 0,
    'Center City Campus': 0,
    'Queen Lane Campus': 0,
    'Natural Sciences': 0,
    total: 0
  });
  const [loginUser, setLoginUser] = useState({ name: '', address: '' });

  const fetchData = async () => {
    const { data } = await axios.get(`/api/posts`);
    setPost(data);
  };

  useEffect(() => {
    fetchData();
    const newData = {};
    posts.forEach(({ location: address }) => {
      newData[address] = newData[address] + 1 || 1;
    });

    setLocation({ ...newData });
  }, [posts.length]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    user && setLoginUser(user);
  }, [loginUser.name]);

  return (
    <AppContext.Provider
      value={{
        posts,
        loginUser,
        setLoginUser,
        location,
        fetchData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
