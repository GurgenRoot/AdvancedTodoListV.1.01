import React from "react";
import './NavbarBrand.scss'
import {NavLink} from "react-router-dom";

export const NavbarBrand = () => {
    return(
        <NavLink className="navbar-brand" to='/'>
            <div className="foo">
                <span className="letter" data-letter="T">T</span>
                <span className="letter" data-letter="O">O</span>
                <span className="letter" data-letter="D">D</span>
                <span className="letter" data-letter="O">O</span>
            </div>
        </NavLink>
    )
}