import React from 'react';

import { ExperienceItem } from '../../components/';

import './MainScreen.css';

import resume from '../../data/resume.json';

export default function MainScreen(props) {
    return (
        <div className='main-container'>
            <div className='profile-photo-container'>
            </div>
            <div className='experience-container'>
                {resume.experiences.map((experience) => {
                    return (
                        <ExperienceItem
                            company={experience.company}
                            positions={experience.positions}
                        />
                    )
                })}
            </div>
        </div>
    );
}