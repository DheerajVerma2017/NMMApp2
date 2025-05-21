import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <>
    <nav>
      <Link to="/" className="title">
        My-NMM-Web-Application
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>

        {/* Add more clickable icons as needed */}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {/* Add more clickable icons as needed */}
        <br />
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/purchase">Purchase</NavLink>
        </li>
         <li>
          <NavLink to="/inventory">Inventory</NavLink>
        </li>
        <li>
          <NavLink to="/sales">Sales</NavLink>
        </li>
        <li>
          <NavLink to="/billprint">BillPrint</NavLink>
        </li>
         <li>
          <NavLink to="/view">View</NavLink>
        </li>
        {/* <li>
          <NavLink to="/reports">Reports</NavLink>
         </li> */}
        <li>
          <NavLink to="/company">Company</NavLink>
        </li>
         <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li></li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
         <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>

        {/* Add more links as needed */}
      </ul>
    </nav>

  </>
  );
};
