/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function addUserName(userName) {
    return auth.currentUser.updateProfile({
      displayName: userName,
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    logout,
    login,
    addUserName,
  };

  // if not loading, then don't render anything until user is set
  return (
    <div>
      <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    </div>
  );
}
