import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'HTML5/CSS3', level: 90 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'TypeScript', level: 75 },
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express.js', level: 80 },
                { name: 'MongoDB', level: 75 },
                { name: 'PostgreSQL', level: 70 },
                { name: 'REST APIs', level: 85 },
            ]
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 65 },
                { name: 'Webpack', level: 75 },
                { name: 'Jest', level: 80 },
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-gray-50">
            <div className="container-max">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Skills & Expertise
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Additional Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Problem Solving', 'Team Collaboration', 'Agile/Scrum',
                            'Code Review', 'Testing', 'Documentation', 'Performance Optimization',
                            'Responsive Design', 'UI/UX Principles', 'Version Control'
                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
