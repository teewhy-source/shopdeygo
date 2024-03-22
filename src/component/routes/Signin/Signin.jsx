import React from 'react'
import {signInWithgooglePopup} from "../../../utility-files/firebase/Firebase"
const Signin = () => {
    const loggoogleuser = async ()=>{ //asynchronous function becos whenever you u make a call to a database, it has to be asynchronous
        const response = await signInWithgooglePopup();
        console.log(response);
    }
  return (
    <div>
       <button onClick={loggoogleuser}>
        SIGN-IN-WITH-GOOGLE
       </button>
    </div>
  )
}

export default Signin