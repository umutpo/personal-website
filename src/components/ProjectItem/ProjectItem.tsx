import React from 'react';

export default function ProjectItem(props: { project, link, key_events }) {
    return (
        <div className="project-item">
            <h3 className="project-name">{props.project}</h3>
            <h5 className="project-link">{props.link}</h5>
            {props.key_events.map((event) => {
                return <li className="project-event">{event}</li>
            })}
        </div>
    );
};
