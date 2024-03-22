// import firebase first
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithPhoneNumber,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaLHGU8ezjimfXt75_UAHV7GEjIckTZpk",
  authDomain: "shopdeygo-90f08.firebaseapp.com",
  projectId: "shopdeygo-90f08",
  storageBucket: "shopdeygo-90f08.appspot.com",
  messagingSenderId: "596691516062",
  appId: "1:596691516062:web:a9c457781cf1a3f839d98f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// to use the ggogle authentication, you need to set up this configurations, google config 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     prompt:"select_account"
})

export const auth=getAuth()
export const signInWithgooglePopup =()=> signInWithPopup(auth,provider)//annonymose function, so passed the auth that i created  and provider that i generated up