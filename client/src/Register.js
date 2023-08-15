import React, { useState } from 'react'
import Footer from './Footer'

const Register = () => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  async function register(e){
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register",{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-type' : 'application/json'},
    });

    if (response.status===200) {
      alert("Registration Successful! You can now Login")
    } else {
      alert("Username already exists!!! Kindly change your Username");
    }
  }

  return (
    <div>
      <>
      <form onSubmit={register}>
        <div class="formbox m-auto max-width">
          <h2><u>REGISTER</u></h2>
          <div class="forminput">
            <p>Username : </p>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value);
              }} 
              />
          </div>

          <div class="forminput">
            <p>Password : </p>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }} 
              />
          </div>
          <button class="btn2">Submit</button>
        </div>
      </form>
      </>
      <Footer/>
    </div>
  )
}

export default Register;
