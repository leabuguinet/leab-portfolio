import React from 'react';
import '../components/_footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(


        <footer className="">

            <ul>
                            <li><FontAwesomeIcon icon={faGithub} className="heartbeat" /></li>
                            <li><FontAwesomeIcon icon={faEnvelope} className="wobble-hor-bottom"/></li>
                            <li><FontAwesomeIcon icon={faTelegram} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            

                        </ul>
        </footer>
    )

    
}

export default Footer;