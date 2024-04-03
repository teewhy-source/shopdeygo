import React from "react";
import Signup from "../../signup/Signup";
import {
  auth,
  signInWithgooglePopup,
  createuserdocumentfromauth,
  signinwithgoogleredirect,
} from "../../../utility-files/firebase/Firebase";
const Signin = () => {
  const loggoogleuser = async () => {
    //asynchronous function becos whenever you u make a call to a database, it has to be asynchronous
    const { user } = await signInWithgooglePopup();
    const userdocref = await createuserdocumentfromauth(user);
  };

  return (
    <div>
      <button onClick={loggoogleuser}>SIGN-IN-WITH-GOOGLE</button>
        <Signup/>
    </div>
  );
};

export default Signin;
