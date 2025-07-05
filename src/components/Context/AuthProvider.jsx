import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setauthUser] = useState(undefined);

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      setauthUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setauthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
