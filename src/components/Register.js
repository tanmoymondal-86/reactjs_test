import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
export default function Register() {

  const [fname, setFname]=useState("");
  const [lname, setLname]=useState("");
  const [address, setAddress]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [value, setValue] = useState(new Date());
  const [allData, setAllData]=useState([]);
  const [success,setSuccess] = useState(null);
  const [error, setError]=useState(null);
  
  const submit = (e) => {

    e.preventDefault();
    setSuccess(<p>Registration Success!!</p>);
    const newEntry = {fname:fname, lname:lname, address:address, date:value, email:email, password:password }
    setAllData([...allData, newEntry ])
  }


  function checkEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
  }
 
  function RegisterButton(){
    if (fname && lname && address && value && email && password && error === null)
      {return <form onClick={submit}>
      <button type="button">Register</button>
      {success}
      </form>   
    }
    else {
      return <button type="button" disabled>Register</button>
    };

};



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
          <h1>Registration Page</h1>
        </ul>
    </div>
    <div>
      <ul>
        First Name
        <form action="">
          <label htmlFor='fname'></label>
          <input type='text' name='fname' id='fname' autoComplete="off"
            value={fname}
            onChange={(e) => setFname(e.target.value.replace(/[^a-z]/gi, ''))}
            placeholder="Enter First Name"
            
          />
        </form>
        </ul>
      </div>

      <div>
        <ul>
          Last Name
          <form action="">
            <label htmlFor='lname'></label>
            <input type='text' name='lname' id='lname' autoComplete="off"
              value={lname}
              onChange={(e) => setLname(e.target.value.replace(/[^a-z]/gi, ''))}
              placeholder="Enter Last Name"
             />
          </form>
        </ul>
      </div>

      <div>
        <ul>
          Address
          <form action="">
            <label htmlFor='address'></label>
            <input type='text' name='address' id='address' autoComplete="off" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
            />
          </form>
        </ul>
      </div>

      <div>
        <ul>
          Date of Birth
          <p></p>
            <DatePicker onChange={setValue} value={value} format="dd-MM-y" />
          
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
          <RegisterButton/>
        </ul>
    </div>
  );

}