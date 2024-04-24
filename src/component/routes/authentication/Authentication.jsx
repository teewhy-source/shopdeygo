import React from "react";
import Signup from "../../signup/Signup";
import Signin from "../../signinform/Signin";
import "./auth.styles.scss"

const Authentication = () => {
 

  return (
    <div className="authentication-container">
      <Signin/>
        <Signup/>
    </div>
  );
};

export default Authentication;
