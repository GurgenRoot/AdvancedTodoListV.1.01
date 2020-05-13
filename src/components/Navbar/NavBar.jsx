import React from "react";
import {NavLink} from "react-router-dom";
import {NavbarBrand} from "./NavbarBrand";

export const NavBar = () => (
  <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <NavbarBrand/>

          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <NavLink className="nav-link" to='/'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to='/settings'>Settings</NavLink>
                  </li>
              </ul>
          </div>
      </nav>
  </div>
);