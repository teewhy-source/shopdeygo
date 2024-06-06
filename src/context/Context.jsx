import React, { createContext,  useEffect,useReducer } from "react";

import {
  onAuthStateChangedlistener,
  createuserdocumentfromauth,
} from "../utility-files/firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});



export const UserActionType ={
  SET_CURRENT_USER : "SET_CURRENT_USER"
}


const Userreducer = (state,action)=>{
  console.log("dispatch");
  console.log(action);
  const {type,payload} = action;

   switch (type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:payload
      }
      
    default:
      throw new Error(`unhandled type ${type} in user`)
      
   }
}

const InitialState = {
  currentUser:null
}

export const UserProvider = ({ children }) => {
  const [{currentUser},dispatch] = useReducer(Userreducer,InitialState)
  console.log(currentUser);
  
const setCurrentUser =(user)=>{
  dispatch({type:UserActionType.SET_CURRENT_USER,payload:user})
}

  const value = { currentUser, setCurrentUser };

  //   Signoutuser()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedlistener((user) => {
      if (user) {
        createuserdocumentfromauth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
