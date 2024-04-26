import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChangedlistener,createuserdocumentfromauth } from "../utility-files/firebase/Firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //   Signoutuser()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedlistener((user) => {
        if (user) {
             createuserdocumentfromauth(user)
        }
      setCurrentUser(user)
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
