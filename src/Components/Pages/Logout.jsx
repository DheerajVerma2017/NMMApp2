import axios  from 'axios';
import React from 'react'
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//import jwtDecode from 'jwt-decode';
export const  Logout = () =>{
  const navigate =  useNavigate();
  const handleLogout = () => {
    // Call your API endpoint to log the user out
    // Implement your logout logic here, such as clearing the token from local storage
    axios.get('http://localhost:3000/api/logout')
    .then(res => {
      // Handle successful logout
      if(res.data.status)
        {
        console.log(res.data);
        console.log("User Logout successfully");
        alert("User Logout successfully");
        localStorage.removeItem('token'); // Redirect to Login &  Home page after successful logout
        confirm("User Logout successfully");
        //console.log("User Logout successfully");
        navigate('/login'); // Redirect to Login & Home page after successful logout
      }
      }).catch(error => {
      console.error("Logout failed:", error);
      alert("An error occurred during logout.");
    });
  }
     // Redirect to Login & Home page after successful logout
  // Call the handleLogout function when the component is rendered
  // Render the logout component
  return (
    <div>
        <h1>Logout</h1>
        <h2>Services</h2>
        <p>You are logged out. Please come back soon.</p>
         <br/>
        <button onClick={handleLogout}>Logout</button>

     </div>
  );
}

//export default Logout













