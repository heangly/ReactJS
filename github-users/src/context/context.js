import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithubUser = async (user) => {
    // toggle error
    // toggle loading
    toggleError();
    setIsLoading(true);

    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((error) => console.log(error));

    if (response) {
      setGithubUser(response.data);
    } else {
      toggleError(true, 'there is no user with that username');
    }
    checkRequests();
    setIsLoading(false);
  };

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  // check rate
  const checkRequests = async () => {
    const {
      data: {
        rate: { remaining },
      },
    } = await axios
      .get(`${rootUrl}/rate_limit`)
      .catch((error) => console.log(error));

    setRequests(remaining);
    if (remaining === 0) {
      toggleError(true, 'sorry, you have exceeded your hourly rate limit!');
    }
  };

  // errors
  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
