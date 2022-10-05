/* eslint-disable */

import logo from '../../assets/logo.svg';
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import { useDispatch } from "react-redux";
import { login, logout } from '../../redux/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    window.location.reload()
    dispatch(logout());
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div
        className={open ? "hamburger toggle" : "hamburger"}
        onClick={handleClick}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li className={open ? "fade" : undefined} >
          <NavLink onClick={() => setOpen(false)} to="/">
            Home
          </NavLink>
        </li>
        <li className={open ? "fade" : undefined} >
          <NavLink onClick={() => setOpen(false)} to="/destinations">
            Destinations
          </NavLink>
        </li>
        <li className={open ? "fade" : undefined} >
          <NavLink onClick={() => setOpen(false)} to="/about">
            About
          </NavLink>
        </li>
        <li className={open ? "fade" : undefined} >
          <NavLink onClick={() => setOpen(false)} to="/partner">
            Partner
          </NavLink>
        </li>
        <li className={open ? "fade" : undefined} >
          <Link onClick={() => setOpen(false)} id="loginLink" to="/login">
            Login
          </Link>
        </li>
        <li className={open ? "fade" : undefined} >
          <Link onClick={() => setOpen(false)} id="registerLink" to="/register">
            Register
          </Link>
        </li>
        <button onClick={handleLogout}>Logout</button>
      </ul>
    </nav>
  );
};

export default Navbar;
