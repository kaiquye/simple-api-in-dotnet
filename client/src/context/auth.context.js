import React from 'react';
export const AuthContext = React.createContext();

export const AuthContext = function () {
  const [user, setUser] = React.useState(false);

  const setToken = function (token) {
    if (token) {
      setToken(token);
      localStorage;
    }
  };

  return <AuthContext.Provider value={(user, setUser)}>{{ children }}</AuthContext.Provider>;
};
