import React from "react";
import "./_nav.scss";
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
                    <NavLink to="/projects" className="navbar__link">
                        { t('Nav.Projects') }
                    </NavLink>
                </li>
                <li className="navbar__item slideInDown-2">
                    <NavLink to="/" className="navbar__link">
                        {t('Nav.About')}
                    </NavLink>
                </li>
                <li className="navbar__item slideInDown-3">
                    <NavLink to="/contact" className="navbar__link">
                        {t('Nav.Contact')}
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