// NavBar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";
import "../assets/styles/navbar.css";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <p className="heading">LMS Dashboard</p>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload" activeclassname="active">
              Course Upload
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" activeclassname="active">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" activeclassname="active">
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
