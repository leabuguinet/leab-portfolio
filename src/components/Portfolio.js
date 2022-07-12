import React from 'react';
import { useTranslation } from 'react-i18next';

/* Translation */
import "../i18n";

/* SCSS */
import "./_portfolio.scss";

/* Components */
import ProjectBox from './ProjectBox/ProjectBox';

/* Images */
import archipel from '../assets/images/archipel.png';
import dailyorsay from '../assets/images/dailyorsay.png';
import findmyart from '../assets/images/findmyart.png';
import leabme from '../assets/images/leabme.png';
import marileme from '../assets/images/marileme.png';
import lesgrandsespaces from '../assets/images/lesgrandsespaces.png';
import procatination from '../assets/images/procatination.png';

const Portfolio = () => {

    const { t } = useTranslation();

    return(
        <div>

            <section className="projects-section">

                <ProjectBox 
                    img={lesgrandsespaces} 
                    title={t('Project6.title')}
                    description={t('Project6.description')}
                    technologies={t('Project6.technologies')}
                    technologiesused={t('Project6.technologies-used')}
                    href={t('Project6.link')}
                    label={t('Link.1')}
                    secondLink={false}

                />

                
                <ProjectBox 
                    img={archipel} 
                    title={t('Project1.title')}
                    description={t('Project1.description')}
                    technologies={t('Project1.technologies')}
                    technologiesused={t('Project1.technologies-used')}
                    href={t('Project1.link')}
                    label={t('Link.1')}
                    secondLink={true}
                    href2={t('Project1.githublink')}
                    label2={t('Link.2')}

                />

                <ProjectBox 
                    img={marileme} 
                    title={t('Project5.title')}
                    description={t('Project5.description')}
                    technologies={t('Project5.technologies')}
                    technologiesused={t('Project5.technologies-used')}
                    href={t('Project5.link')}
                    label={t('Link.1')}
                    secondLink={false}

                />

                <ProjectBox 
                    img={dailyorsay} 
                    title={t('Project2.title')}
                    description={t('Project2.description')}
                    technologies={t('Project2.technologies')}
                    technologiesused={t('Project2.technologies-used')}
                    href={t('Project2.link')}
                    label={t('Link.1')}
                    secondLink={true}
                    href2={t('Project2.githublink')}
                    label2={t('Link.2')}
                />

                <ProjectBox 
                    img={procatination} 
                    title={t('Project7.title')}
                    description={t('Project7.description')}
                    technologies={t('Project7.technologies')}
                    technologiesused={t('Project7.technologies-used')}
                    href={t('Project7.link')}
                    label={t('Link.1')}
                    secondLink={true}
                    href2={t('Project7.githublink')}
                    label2={t('Link.2')}
                />

                <ProjectBox 
                    img={leabme} 
                    title={t('Project3.title')}
                    description={t('Project3.description')}
                    technologies={t('Project3.technologies')}
                    technologiesused={t('Project3.technologies-used')}
                    href={t('Project3.githublink')}
                    label={t('Link.2')}
                    secondLink={false}
                   
                />

                <ProjectBox 
                    img={findmyart} 
                    title={t('Project4.title')}
                    description={t('Project4.description')}
                    technologies={t('Project4.technologies')}
                    technologiesused={t('Project4.technologies-used')}
                    href={t('Project4.githublink')}
                    label={t('Link.2')}
                    secondLink={false}
                />

                <div className="footer-divider">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                        </svg>
                </div>


                
            </section>

        </div>
    )

    
}

export default Portfolio;