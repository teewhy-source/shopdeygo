// import firebase first
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut
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
const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
     prompt:"select_account"
})

export const auth= getAuth()
export const signInWithgooglePopup =()=> signInWithPopup(auth,googleprovider)//annonymose function, so passed the auth that i created  and googleproviderprovider that i generated up
export const signinwithgoogleredirect =()=> signInWithRedirect(auth,googleprovider)
export const database = getFirestore ()

export  const createuserdocumentfromauth = async (
    userAuth,
    additionalinfomation = {}
    ) =>{ //this function receives user authentication object
    if (!userAuth) return;
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
                createdate,
                ...additionalinfomation
            })
        } catch (error) {
            console.log("error creating the user", error.message);
        }

    }// all this is what is what will happen if user does not exist 

    return userdocref;
};
// I NEED TO WATCH VID 76 AGAIN TO GET A BETTER UNDERSTANDING  


// Exporting a constant function named createuserwithemailAndpassword
export const createuserwithemailAndpassword = async (email, password) => {
    // Input validation: Checking if email or password is missing
    if (!email || !password) return; // If either email or password is falsy, return without further execution
    
    // Calling an asynchronous function to create a user with the provided email and password
    return await createUserWithEmailAndPassword(auth, email, password);
    // 'auth' likely represents some authentication service or context
    // 'email' and 'password' are parameters passed to createUserWithEmailAndPassword
};
export const signinuserwithemailandpassword = async (email, password) => {
   
    if (!email || !password) return;
    

    return await signInWithEmailAndPassword(auth, email, password);
    
};

export const Signoutuser =async ()=> await signOut(auth)
