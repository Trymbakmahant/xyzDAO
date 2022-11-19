import React, { useState } from "react";

import "../assets/navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="nav-content">
        <div className="nav-logo">
          <NavLink exact className="nav-link" to="/">
            <div className="nav-link__background" />
            <div className="nav-logo">XYZDAO</div>
            <div className="nav-link__background" />
          </NavLink>
        </div>
        <nav className="nav-links__container">
          <NavLink exact className="nav-link" to="/videos">
            <div className="nav-link__background" />
            <div className="nav-link__text">
              <h3>Videos</h3>
            </div>
            <div className="nav-link__background" />
          </NavLink>
          <NavLink exact className="nav-link" to="/Features">
            <div className="nav-link__background" />
            <div className="nav-link__text">Features</div>
            <div className="nav-link__background" />
          </NavLink>
          <NavLink exact className="nav-link" to="/services">
            <div className="nav-link__background" />
            <div className="nav-link__text">Services</div>
            <div className="nav-link__background" />
          </NavLink>
          <NavLink exact className="nav-link" to="/uploadvideo">
            <div className="nav-link__background" />
            <div className="nav-link__text">Uploadvideo</div>
            <div className="nav-link__background" />
          </NavLink>
        </nav>

        <div className="nav-menu__icon">
          <div />

          <div />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
