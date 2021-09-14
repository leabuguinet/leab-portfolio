import React from "react";
import "./_nav.scss";
import { useState } from "react"

function Nav() {

    const[showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return(
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <a href="/" className="navbar__link">
                        Projets
                    </a>
                </li>
                <li className="navbar__item slideInDown-2">
                    <a href="/" className="navbar__link">
                        Présentation
                    </a>
                </li>
                <li className="navbar__item slideInDown-3">
                    <a href="/" className="navbar__link">
                        Contact
                    </a>
                </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}

export default Nav;