import React from 'react';

import { ExperienceItem, ProjectItem, EducationItem } from '../../components/';

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
            <div className='project-container'>
                {resume.projects.map((project) => {
                    return (
                        <ProjectItem
                            project={project.project}
                            link={project.link}
                            key_events={project.key_events}
                        />
                    )
                })}
            </div>
            <div className='education-container'>
                {resume.educations.map((education) => {
                    return (
                        <EducationItem
                            school={education.school}
                            degree={education.degree}
                            major={education.major}
                            date={education.date}
                            gpa={education.gpa}
                        />
                    )
                })}
            </div>
        </div>
    );
}