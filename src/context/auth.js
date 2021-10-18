import React, { createContext, useState, useEffect } from "react";


const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('t'));
  const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('p')));
  
  useEffect(() => {
    // Pull saved login state from localStorage / AsyncStorage
  }, []);
  
  const login = (profile, token_google) => {
    localStorage.setItem('p', JSON.stringify(profile))
    localStorage.setItem('t', token_google)
    setUserProfile(profile)
    setToken(token_google)
  };
  
  const logout = () => {
    localStorage.removeItem('t')
    localStorage.removeItem('p')
    setUserProfile(null)
    setToken(null)
  };
  
  const authContextValue = {
    token,
    userProfile,
    login,
    logout
  };
  
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };