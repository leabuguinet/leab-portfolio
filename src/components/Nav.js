import React from "react";
import "./_nav.scss";
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

function Nav() {

    const[showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return(
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <NavLink to="/projects" className="navbar__link">
                        Projets
                    </NavLink>
                </li>
                <li className="navbar__item slideInDown-2">
                    <NavLink to="/" className="navbar__link">
                        Présentation
                    </NavLink>
                </li>
                <li className="navbar__item slideInDown-3">
                    <NavLink to="/contact" className="navbar__link">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}

export default Nav;