// import React, { useContext, useEffect, useState } from 'react';
// import { auth } from '../firebase';

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   function signup(email, password) {
//     console.log('email =>', email);
//     console.log('password =>', password);
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//       console.log('user data ===>', user);
//       console.log('user uid ===>', user.uid);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signup,
//   };

//   // if not loading, then don't render anything until user is set
//   return (
//     <div>
//       <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
//     </div>
//   );
// }
