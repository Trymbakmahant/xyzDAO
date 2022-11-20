import React, { useState } from "react";

import "../assets/navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="nav-content" style = {{marginTop: "10px"}}>
        <div className="nav-logo">
          <NavLink exact className="nav-link" to="/">
            <div className="nav-link__background" />
            <div className="nav-logo">xyz DAO</div>
            <div className="nav-link__background" />
          </NavLink>
        </div>
        <nav className="nav-links__container">
          <NavLink exact className="nav-link" to="/videos">
            <div className="nav-link__background" />
            <div className="nav-link__text">
              Videos
            </div>
            <div className="nav-link__background" />
          </NavLink>
          <NavLink exact className="nav-link" to="/Features">
            <div className="nav-link__background" />
            <div className="nav-link__text">Features</div>
            <div className="nav-link__background" />
          </NavLink>
          <NavLink exact className="nav-link" to="/membership">
            <div className="nav-link__background" />
            <div className="nav-link__text">Membership</div>
            <div className="nav-link__background" />
          </NavLink>
          <NavLink exact className="nav-link" to="/uploadvideo">
            <div className="nav-link__background" />
            <div className="nav-link__text">Uploadvideo</div>
            <div className="nav-link__background" />
          </NavLink>
          <button className="download-btn" style = {{border: "none"}}>
            Connect Wallet
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
