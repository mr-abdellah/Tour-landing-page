import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);

  function linkDisplay(width, open) {
    if (open && width < 600) return "nav-links";
    else if (!open && width < 600) return "hide";
    //
    else if (!open && width > 600) return "nav-links";
    else if (!open && width > 600) return "show";
  }
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  console.log(width);
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className={linkDisplay(width, open)}>
        <NavLink onClick={handleClose} to="/">
          Home
        </NavLink>
        <NavLink onClick={handleClose} to="/destinations">
          Destinations
        </NavLink>
        <NavLink onClick={handleClose} to="/about">
          About
        </NavLink>
        <NavLink onClick={handleClose} to="/partner">
          Partner
        </NavLink>
        <Link onClick={handleClose} to="/login">
          Login
        </Link>
        <Link onClick={handleClose} to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
