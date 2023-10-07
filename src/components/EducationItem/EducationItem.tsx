import React from 'react';

export default function EducationItem(props: { school, degree, major, date, gpa }) {
    return (
        <div className="education-item">
            <h3 className="education-school">{props.school}</h3>
            <p className="education-degree">{props.degree}</p>
            <p className="education-major">{props.major}</p>
            <p className="education-date">{props.date}</p>
            <p className="education-gpa">{props.gpa}</p>
        </div>
    );
};
