import React from 'react'
import {useState} from "react"


const Signup = () => {
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={()=>{}}>
            <label htmlFor="">DISPLAY NAME </label>
            <input type="text" required />

            <label htmlFor="">EMAIL</label>
            <input type="email" required/>

            <label htmlFor="">PASSWORD</label>
            <input type="password" required/>

            <label htmlFor="">CONFIRM PASSWORD</label>
            <input type="password" required/>

            {/* //WHEN THE BOTTON IS CLICKED, IT WILL TRIGGER onsubmit callback THAT IS WRITTEN UP */}
            <button type="submit">SUBMIT</button> 
        </form>
    </div>
  )
}

export default Signup