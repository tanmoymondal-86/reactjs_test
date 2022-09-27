import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [allLogin, setAllLogin]=useState([]);

  const submit = (e) => {

    e.preventDefault();
    
    const newEntry = {email:email, password:password }
    setAllLogin([...allLogin, newEntry ])
  }
  const [error, setError]=useState(null);
  function checkEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
  };

  function LoginButton(){
    if (email && password && error===null)
      {return <div>
        <form onClick={submit} >
          <button type="button">Login</button>
          </form>
      </div>
    }
    else {
      return <button type="button" disabled>Login</button>
    };
  }

  return (
    
    <div>
    <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Website
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          </nav>
      <div>
        <ul>
          <h1>Login Page</h1>
        </ul>
    </div>

      <div>
        <ul>
          Email
          <form action="">
            <label htmlFor='email'></label>
            <input type='text' name='email' id='email' autoComplete="off" 
              value={email}
              onChange={(e) =>{
                if(checkEmail(e.target.value))
                  setError(null);
                else
                {
                  setError("Invalid Email")
                }
                 setEmail(e.target.value)}}
              placeholder="Enter Your Email"
            />
          </form>
          {error}
        </ul>
      </div>
      <div>
        <ul>
          Password
          <form action="">
            <label htmlFor='password'></label>
            <input type='password' name='password' id='password' autoComplete="off" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </form>
        </ul>  
      </div>
      <p></p>
        <ul>
          <LoginButton/>
        </ul>
    </div>
  );

}