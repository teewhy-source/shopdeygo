import React from "react";
import "./signin.styles.scss"
import Button from "../../button/Button";
import Forminput from "../forminput/Forminput";
import { useState,useContext } from "react";
import { UserContext } from "../../context/Context";
import {
  createuserwithemailAndpassword,
  createuserdocumentfromauth,
  signInWithgooglePopup,
  signinuserwithemailandpassword
} from "../../utility-files/firebase/Firebase";

const defaultformfields = {
  
  email: "",
  password: "",
  
};

const Signin = () => {
  const [formfields, setformfields] = useState(defaultformfields);
  const { email, password,} = formfields;
  
  const {setCurrentUser} = useContext(UserContext)// this is coming from another component 

  //this method will clear out the formfields 
  const resetformfields = () =>{
    setformfields(defaultformfields)
  }

  console.log(formfields);


  const Signinwithgoogle = async () => {
    //asynchronous function becos whenever you u make a call to a database, it has to be asynchronous
    const { user } = await signInWithgooglePopup();
    await createuserdocumentfromauth(user)

  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    // if (password !== confirmpassword) {
    //   // it will check if password does not match
    //   alert("your password does not match");
    //   return;
    // }

    try {
      const {user} = await signinuserwithemailandpassword (
        email,
        password
      )
      

      setCurrentUser(user)
     resetformfields ()
    } catch (error) {
      switch(error.code){
        case "auth/invalid-credential": alert("incorrect password for email")
        break
        case "auth/user-not-found":
          alert("No user associated with this email")
          break
          default: console.log(error);
      }
      // if (error.code=="auth/invalid-credential") {
      //   alert ("incorrect password for email")
      // } else if(auth/invalid-credential)
      console.log(error);
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formfields, [name]: value });
  };

  return (
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
      <span>Sign-in with ur Gmail and Password</span>
      <form onSubmit={handlesubmit}>
        
      

        
        <Forminput
         label= "EMAIL"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />

        
        <Forminput
         label= "PASSWORD"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={password}
        />

        
       
        <div className="button-container">
        <Button type="submit" >Sign in</Button>
        <Button type="button" buttontype="google" onClick={ Signinwithgoogle}>Google Sign-in</Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
