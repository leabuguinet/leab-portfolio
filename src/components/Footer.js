import React from 'react';

/* SCSS */
import '../components/_footer.scss';

/* Translations */
import { useTranslation } from 'react-i18next';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const { t } = useTranslation();

    return(

        <footer>

            <h3>{t('Contact.1')}</h3>

            <ul className="footer-icons">
                <li>
                    <a href="https://github.com/leabuguinet"><FontAwesomeIcon icon={faGithub} className="anim-pulsate" /></a>
                </li>
                <li>
                    <a href="mailto:lea.buguinet@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="anim-pulsate"/></a>
                </li>
                <li>
                    <a href="https://t.me/lleab"><FontAwesomeIcon icon={faTelegram} className="anim-pulsate"/></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/l%C3%A9a-buguinet-050642135/"><FontAwesomeIcon icon={faLinkedin} className="anim-pulsate"/></a>
                </li>
            </ul>

        </footer>
    )

    
}

export default Footer;