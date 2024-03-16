import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navbar-layout">
      <Link to="/">Home</Link>
      <Link to="/modal">Modal(WIP)</Link>
      <Link to="/calculator">Calculator</Link>
    </div>
  );
};

export default NavBar;
