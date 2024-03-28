// import firebase first
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithPhoneNumber,
} from "firebase/auth";

//setting up the firestore, firestore is a different service, so we need to import some methods(firestore, doc,getdoc,setdoc) from firestore. below
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    Firestore
} from "firebase/firestore"


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
export const database = getFirestore ()

export  const createuserdocumentfromauth = async (userAuth) =>{ //this function receives user authentication object
    const userdocref = doc(database, "users",userAuth.uid)
    console.log(userdocref);

    const usersnapshot = await getDoc(userdocref) // the snapshot is like a data and it is also a specific kinda object
    console.log(usersnapshot);
    console.log(usersnapshot.exists())

    //if user data does not exist == create/set the document with the data from userauth in my collection
    //if user data exists == ruturn true
    if (!usersnapshot.exists()) {
        const {displayName,email} = userAuth
        const createdate = new Date();
        try {
            await setDoc(userdocref,{
                displayName,
                email,
                createdate
            })
        } catch (error) {
            console.log("error creating the user", error.message);
        }

    }// all this is what is what will happen if user does not exist 

    return userdocref;
};
// I NEED TO WATCH VID 76 AGAIN TO GET A BETTER UNDERSTANDING 