import React from 'react';
import { TokenStorage } from '../useCases/client/storage/auth.local-store';
export const AuthContext = React.createContext({});

export const AuthContextProvider = function ({ children }) {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    if (TokenStorage().get() !== null) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  const setToken = function (token) {
    console.log('aaaaaaaaaaa' + token);
    if (token) {
      setUser(token);
      TokenStorage().add(token);
    }
  };

  const getToken = function () {
    return TokenStorage().get();
  };

  return <AuthContext.Provider value={{ user, setToken, getToken }}>{children}</AuthContext.Provider>;
};
