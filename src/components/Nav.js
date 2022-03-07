import React from "react";
import "./_nav.scss";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangChoice from "./LangChoice";

const Nav = () => {

    const[showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const { t } = useTranslation();


    return(
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <NavLink to="/portfolio" className="navbar__link" onClick={handleShowLinks}>
                        { t('Nav.Projects') }
                    </NavLink>
                </li>
                <li className="navbar__item slideInDown-2">
                    <NavLink to="/" className="navbar__link" onClick={handleShowLinks}>
                        {t('Nav.About')}
                    </NavLink>
                </li>
                <li className="navbar__item slideInDown-4 language-btn">
                    <LangChoice />
                </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>

            
        </nav>
    )
}

export default Nav;