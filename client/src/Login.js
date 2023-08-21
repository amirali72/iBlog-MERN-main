import React, { useContext } from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Login = () => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("https://iblog-dz12.onrender.com//login",{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-type' : 'application/json'},
      credentials:'include',
    });
    if(response.ok){
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
        setRedirect(true);
      })
    }
    else{
      alert("Wrong Credentials");
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div>
      <>
      <form onSubmit={login}>
        <div className="formbox m-auto max-width">
          <h2><u>LOGIN</u></h2>
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

export default Login
