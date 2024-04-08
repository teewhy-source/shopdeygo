import React from "react";
import { useState } from "react";

const defaultformfields = {
  displayname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const [formfields, setformfields] = useState(defaultformfields);
  const { displayname, email, password, confirmpassword } = formfields;

  console.log(formfields);

  const handlechange = (event) => {
    const { name, value} = event.target;
    setformfields({...formfields, [name]:value})
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={() => {}}>
        <label>DISPLAY NAME </label>
        <input
          type="text"
          required
          onChange={handlechange}
          name="displayname" 
          value={displayname}
        />

        <label>EMAIL</label>
        <input
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          required
          onChange={handlechange}
          name="password" 
          value={password}
        />

        <label>CONFIRM PASSWORD</label>
        <input
          type="password"
          required
          onChange={handlechange}
          name="confirmpassword" 
          value={confirmpassword}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Signup;


