import React,{use, useState} from 'react';
import "../index.css"
import ListUsers from './ListUsers';


export default function Login(params) {
    const[username,setUserName] = useState("")
    const[password,setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUserChange =(e) => {
        setUserName(e.target.value);
        console.log(username)
    }
    const handlePasswordChange=(e)=> {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        if(username === "admin" && password=="12345") {
            e.preventDefault();
            setIsLoggedIn(true)
        }
        else {
            alert("invalid username or password entered")
        }
    }
    if(isLoggedIn) {
        return   <ListUsers status="true"/>

    }

    return (
        <div className='body'>
            <div className="wrapper">
  <form action="#">
    <h2>Login</h2>
    <div className="input-field">
      <input type="text" required value={username} onChange={handleUserChange} />
      <label>Enter your username</label>
    </div>
    <div className="input-field">
      <input type="password" required value={password} onChange={handlePasswordChange}/>
      <label>Enter your password</label>
    </div>
    <div className="forget">
      <label htmlFor="remember">
        <input type="checkbox" id="remember" />
        <p>Remember me</p>
      </label>
    </div>
    <button type="submit" onClick={handleSubmit}>Log In</button>
    
  </form>
</div>
        </div>
    )
};
