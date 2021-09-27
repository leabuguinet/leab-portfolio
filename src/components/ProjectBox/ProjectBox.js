import React from 'react';
import ExtRectangleLink from '../ExternalRectangleLink/ExtRectangleLink';

import "./_projectbox.scss";

/* Component to show a project  */

const ProjectBox = (props) => {

    return (

        <div className="projectbox scale-in-center">

            <div
            style={{
                backgroundImage: `url(${props.img})`
            }}
            className="project-img"
            >
            </div>

            <h4>{props.title}</h4>

            <p>{props.description}</p>

            <p>{props.technologies} {props.technologiesused}</p>


            <ExtRectangleLink href={props.href} label={props.label} />


        </div>

    )
}

export default ProjectBox;