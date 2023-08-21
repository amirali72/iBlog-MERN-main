import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Register = () => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[redirect, setRedirect] = useState(false);

  async function register(e){
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register",{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-type' : 'application/json'},
    });

    if (response.status===200) {
      alert("Registration Successful! You can now Login");
      setRedirect(true);
    } else {
      alert("Username already exists!!! Kindly change your Username");
    }
  }

  if (redirect) {
    return <Navigate to={'/login'}/>
  }

  return (
    <div>
      <>
      <form onSubmit={register}>
        <div className="formbox m-auto max-width">
          <h2><u>REGISTER</u></h2>
          <div className="forminput">
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

          <div className="forminput">
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
          <button className="btn2">Submit</button>
        </div>
      </form>
      </>
    </div>
  )
}

export default Register;
