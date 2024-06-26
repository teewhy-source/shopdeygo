import React from "react";
import "./signup.styles.scss"
import Button from "../../button/Button";
import Forminput from "../forminput/Forminput";
import { useState } from "react";

import {
  createuserwithemailAndpassword,
  createuserdocumentfromauth,
} from "../../utility-files/firebase/Firebase";

const defaultformfields = {
  displayname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const [formfields, setformfields] = useState(defaultformfields);
  const { displayname, email, password, confirmpassword } = formfields;

  

  

  //this method will clear out the formfields 
  const resetformfields = () =>{
    setformfields(defaultformfields)
  }



  const handlesubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      // it will check if password does not match
      alert("your password does not match");
      return;
    }

    try {
      const {user} = await createuserwithemailAndpassword(email, password);
      
      await createuserdocumentfromauth(user, { displayname });
      resetformfields()
    } catch (error) {
      if ((error.code  === "auth/email-already-in-use")) {
        alert("cannot create user, email already exist");
      } else {
       
      }
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formfields, [name]: value });
  };

  return (
    <div className="sign-up-container">
        <h2>Dont have an account?</h2>
      <span>Signup with your mail</span>
      <form onSubmit={handlesubmit}>
        
        <Forminput
        label= "DISPLAY NAME"
          type="text"
          required
          onChange={handlechange}
          name="displayname"
          value={displayname}
        />

        
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

        
        <Forminput
         label= "CONFIRM PASSWORD"
          type="password"
          required
          onChange={handlechange}
          name="confirmpassword"
          value={confirmpassword}
        />

        <Button type="submit">SUBMIT FORM</Button>
      </form>
    </div>
  );
};

export default Signup;
 