
//import React from "react"
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
//import { FiMail, FiKey} from 'react-icons/fi';
//import "../App.css";
import Axios from "axios";
export const Login = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const [user, setUser] = useState({ username: '', email: '', password: '' });
    // TODO: Validate inputs
    // TODO: Handle errors
    // TODO: Implement JWT token handling and refresh token logic
    // TODO: Add user profile page and update functionality
    Axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/api/login', {
            email,
            password
        }).then(response => {
          console.log("hello from login response");
            //console.log(response.data);
            //setUser(response.data);  // Handle response data
           // navigate("/Dashboard");  // Redirect to dashboard or Home page after successful login
            alert("User Login successfully");
            navigate("/"); // Redirect to dashboard or Home page after successful login
            //setUser(response.data); // Set user data from response
        }).catch(error => {
            console.log(error); // Handle error
            alert("User Login failed. Please try again");

        })
        // setUser({user, email: '', password: '' }); // Clear input fields after submission



  };
    
  return (
   <>  
     <div className="login-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2>Welcome to Login App</h2>
            <div className="input-box">
            <i class='bx bxs-envelope'></i>
            <label for="email">Email</label>
              <input type="email" placeholder="Enter Your Email*"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <i class='bx bxs-lock'></i>
             <label for="password">Password</label>
              <input type="password" placeholder="Enter Your Password*"
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <button type='submit'>Login</button>
              <br/>
            <p>Don't have an account?</p> <Link to="/signup">Signup</Link>
          </form>
      </div>
    </>
  );
};
//export default Login
/*
import React from 'react'

function Login() {
  return (
    <div>Login</div>
  )
}

export default Login
*/
