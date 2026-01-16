import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
            image: '/images/project1.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            features: ['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Panel'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team collaboration features.',
            image: '/images/project2.jpg',
            technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
            features: ['Real-time Updates', 'Team Collaboration', 'Drag & Drop', 'Task Analytics'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A responsive weather dashboard that provides detailed weather information and forecasts.',
            image: '/images/project3.jpg',
            technologies: ['React', 'Tailwind CSS', 'Weather API', 'Chart.js'],
            features: ['Weather Forecasts', 'Interactive Maps', 'Location Search', 'Weather History'],
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container-max">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="text-4xl font-bold mb-2">{project.title.charAt(0)}</div>
                                    <div className="text-sm">Project Image</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-primary text-white text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.liveUrl}
                                        className="flex-1 text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="flex-1 text-center bg-secondary text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                    >
                        View More Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
