import React from "react";
import "./signin.styles.scss";
import Button from "../../button/Button";

import Forminput from "../forminput/Forminput";
import { useState } from "react";

import {
  signInWithgooglePopup,
  signinuserwithemailandpassword,
} from "../../utility-files/firebase/Firebase";

const defaultformfields = {
  email: "",
  password: "",
};

const Signin = () => {
  const [formfields, setformfields] = useState(defaultformfields);
  const { email, password } = formfields;

  //this method will clear out the formfields
  const resetformfields = () => {
    setformfields(defaultformfields);
  };

  

  const Signinwithgoogle = async () => {
    //asynchronous function becos whenever you u make a call to a database, it has to be asynchronous
    await signInWithgooglePopup();
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    // if (password !== confirmpassword) {
    //   // it will check if password does not match
    //   alert("your password does not match");
    //   return;
    // }

    try {
      const { user } = await signinuserwithemailandpassword(email, password);

      // setCurrentUser(user)
      resetformfields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
        
      }
      // if (error.code=="auth/invalid-credential") {
      //   alert ("incorrect password for email")
      // } else if(auth/invalid-credential)
    
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
          label="EMAIL"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />

        <Forminput
          label="PASSWORD"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={password}
        />

        <div className="button-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttontype="google" onClick={Signinwithgoogle}>
            Google{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
