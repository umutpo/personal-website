import React from 'react';

export default function ExperienceItem(props: { company, positions }) {
    return (
        <div className="experience-item">
            <h3 className="experience-company">{props.company}</h3>
            {props.positions.map((position) => {
                return (
                    <>
                        <p className="experience-title">{position.title}</p>
                        <p className="experience-date">{position.date}</p>
                        {position.key_events.map((event) => {
                            return <li className="experience-description">{event}</li>
                        })}
                    </>
                )
            })}
        </div>
    );
};
