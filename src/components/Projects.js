import React from 'react';
import { useTranslation } from 'react-i18next';
import "../i18n";
import ProjectBox from './ProjectBox/ProjectBox';
import archipel from '../assets/images/essai.png';

const Projects = () => {

    const { t } = useTranslation();

    return(
        <div>
            <h3>Projects</h3>

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
                img={archipel} 
                title={t('Project2.title')}
                description={t('Project2.description')}
                technologies={t('Project2.technologies')}
                technologiesused={t('Project2.technologies-used')}
                href={t('Project2.link')}
                label={t('Link.1')}
            />

            <ProjectBox 
                img={archipel} 
                title={t('Project3.title')}
                description={t('Project3.description')}
                technologies={t('Project3.technologies')}
                technologiesused={t('Project3.technologies-used')}
                href={t('Project3.link')}
                label={t('Link.1')}
            />

            <ProjectBox 
                img={archipel} 
                title={t('Project4.title')}
                description={t('Project4.description')}
                technologies={t('Project4.technologies')}
                technologiesused={t('Project4.technologies-used')}
                href={t('Project4.link')}
                label={t('Link.1')}
            />


        </div>
    )

    
}

export default Projects;