import React from 'react';
import { useTranslation } from 'react-i18next';
import "../i18n";
import RectangleLink from './RectangleLink/RectangleLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJs, faPhp, faReact, faSass, faSymfony } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


const Presentation = () => {

    const { t } = useTranslation();

    return(
        <div>

            <section className="container about">
                <div className="hi-span">
                    <span>Hi!</span>
                </div>

                <p>{t('About.main-paragraph')}</p> 

                <RectangleLink label='hello'/>

            </section>

            <section className="about-technologies">

                <div className="custom-shape-divider-top-1632154628">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                    </svg>
                </div>



                <div className="container technologies-box">

                    
                    <h3>Technologies</h3>
                    
                    <div className="technologies-list">

                        <ul>
                            <li><FontAwesomeIcon icon={faReact} /> React</li>
                            <li><FontAwesomeIcon icon={faSymfony} /> Symfony</li>
                            <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
                            <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>

                        </ul>

                        <ul>
                            <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                            <li> <FontAwesomeIcon icon={faPhp} /> PHP</li>
                            <li><FontAwesomeIcon icon={faSass} /> SASS</li>
                            <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
                            
                        </ul>
                    </div>
                        
                        
                

                </div>

            </section>
        </div>
    )

    
}

export default Presentation;