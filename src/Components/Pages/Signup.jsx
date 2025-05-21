//import React from "react"
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
//import "../App.css";
import Axios from "axios";
export const Signup = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const [user, setUser] = useState({ username: '', email: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/api/signup', {
            username,
            email,
            password
        }).then(response => {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
             alert("User Signup successfully");
            navigate("/login"); // Redirect to Login & Home page after successful signup
        }).catch(error => {
            console.log(error);
            alert("User Signup failed. Please try again");

        })
    };
  return(
  <>  
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Welcome to NMM App</h2>
         <div className="input-box">
          <i class='bx bxs-user'></i>
          <label for="name">User Full Name</label>
            <input type="text" placeholder="Enter Your Full Name*"
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <i class='bx bxs-envelope'></i>
            <label for="email">Email</label>
              <input type="email" placeholder="Enter Your Email*"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
            <i class='bx bxs-phone'></i>
            <label for="phone">Phone no</label>
              <input type="phone" placeholder="Enter Your Phone no*"
              onChange={(e) => setPhone(e.target.value)}
              />
            </div>
             <div className="input-box">
              <i class='bx bxs-lock'></i>
             <label for="password">Password</label>
              <input type="password" placeholder="Enter Your Password*"
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <button type='submit'>Signup</button>
              <p>Already have an account?</p> <Link to="/login">Login</Link>
        </form>
      </div>
   </>
  );
};































































































/* 
Methods for registering 2
export const Signup = () =>{
  return (
  <>  
    <h1>Signup</h1>
    <h2>Services</h2>
    <div>
      
    </div>
 </>
  );
};




<label htmlFor="username">Username</label>


/*
Methods for registering 1
import React from 'react'

export const Signin() {
  return (
    <div>Signin</div>
 )
}
 export default Signup
*/
