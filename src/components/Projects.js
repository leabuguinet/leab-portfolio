import React from 'react';
import { useTranslation } from 'react-i18next';
import "../i18n";
import ProjectBox from './ProjectBox/ProjectBox';
import archipel from '../assets/images/archipel.png';
import dailyorsay from '../assets/images/dailyorsay.png';
import findmyart from '../assets/images/findmyart.png';
import leabme from '../assets/images/leabme.png';
import "./_projects.scss";

const Projects = () => {

    const { t } = useTranslation();

    return(
        <div>

            <h3>{t('Nav.Projects')}</h3>

            <section className="projects-section">
                <ProjectBox 
                    img={archipel} 
                    title={t('Project1.title')}
                    description={t('Project1.description')}
                    technologies={t('Project1.technologies')}
                    technologiesused={t('Project1.technologies-used')}
                    href={t('Project1.link')}
                    label={t('Link.1')}
                />

                <ProjectBox 
                    img={dailyorsay} 
                    title={t('Project2.title')}
                    description={t('Project2.description')}
                    technologies={t('Project2.technologies')}
                    technologiesused={t('Project2.technologies-used')}
                    href={t('Project2.link')}
                    label={t('Link.1')}
                />

                <ProjectBox 
                    img={leabme} 
                    title={t('Project3.title')}
                    description={t('Project3.description')}
                    technologies={t('Project3.technologies')}
                    technologiesused={t('Project3.technologies-used')}
                    href={t('Project3.link')}
                    label={t('Link.2')}
                />

                <ProjectBox 
                    img={findmyart} 
                    title={t('Project4.title')}
                    description={t('Project4.description')}
                    technologies={t('Project4.technologies')}
                    technologiesused={t('Project4.technologies-used')}
                    href={t('Project4.link')}
                    label={t('Link.1')}
                />

                
            </section>

        </div>
    )

    
}

export default Projects;