import React from 'react';
import './Experience.css';

const Experience = () => {
    const appliedExperience = [
        {
            date: "6/2024 - today",
            name: "BIORCE / Frontend Developer",
            description: "React.js"
        },
        {
            date: "9/2023 - 6/2024",
            name: "Chasers / Frontend Developer",
            description: "Vue.js"
        },
        {
            date: "5/2023 - 9/2023",
            name: "Impacting.Digital / Frontend Developer",
            description: "React.js - Wordpress"
        },
        {
            date: "6/2022 - 5/2023",
            name: "Chasers / Frontend Developer",
            description: "Vue.js - React.js"
        },
        {
            date: "6/2022 - 5/2023",
            name: "Freelance web developer",
            description: "HTML - CSS - Js - React.js"
        },
        {
            date: "10/2016 - 6/2022",
            name: "Supreme Court of Justice of Buenos Aires",
            description: "Lawyer"
        },
    ];

    return (
        <div className='h-[800px]'>
            <div className='timeline'>
                {appliedExperience.map((experience, index) => (
                    <div
                        id={`experience-${index}`}
                        className={`child`}
                        key={index}
                    >
                        <div className='w-[150px] md:w-[200px] p-4 text-[#aaa8a8] -mt-12'>
                            <h4 className='studiTitles'>{experience.date}</h4>
                            <h4 className='studiTitles'>{experience.name}</h4>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
