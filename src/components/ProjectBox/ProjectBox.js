import React from 'react';
import ExtRectangleLink from '../ExternalRectangleLink/ExtRectangleLink';

import "./_projectbox.scss";

/* Component to show a project  */

function ProjectBox(props) {

    let extLink;
    const secondLink = props.secondLink;

    if(secondLink){
        extLink =   <div>
                        <ExtRectangleLink href={props.href} label={props.label} />
                        <ExtRectangleLink href={props.href2} label={props.label2} />
                    </div>;

    } else{
        extLink =   <div>
                        <ExtRectangleLink href={props.href} label={props.label} /> 
                    </div>;
    }


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
            
            {extLink}
            
        </div>

    )
}

export default ProjectBox;