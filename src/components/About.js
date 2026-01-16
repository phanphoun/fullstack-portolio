import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-max">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Building Digital Experiences
                        </h3>
                        <p className="text-gray-600 mb-6">
                            I'm a passionate full-stack developer with over 3 years of experience in creating
                            web applications that make a difference. My journey in tech started with a curiosity
                            about how things work on the internet, and it has evolved into a career focused on
                            building scalable, user-friendly solutions.
                        </p>
                        <p className="text-gray-600 mb-6">
                            I specialize in React.js for frontend development and Node.js for backend services,
                            with a strong foundation in modern web technologies and best practices. I believe in
                            writing clean, maintainable code and creating exceptional user experiences.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                                <p className="text-sm text-gray-600">React, JavaScript, HTML5, CSS3, Tailwind CSS</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-primary mb-2">Backend</h4>
                                <p className="text-sm text-gray-600">Node.js, Express, MongoDB, PostgreSQL, REST APIs</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-primary mb-2">Tools</h4>
                                <p className="text-sm text-gray-600">Git, Docker, AWS, VS Code, Chrome DevTools</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-primary mb-2">Soft Skills</h4>
                                <p className="text-sm text-gray-600">Problem Solving, Team Work, Communication, Time Management</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative group">
                            <div className="w-64 h-64 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300">
                                <img
                                    src="/hero.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-center">
                                        <div className="text-2xl font-bold mb-1">Phoun Phan</div>
                                        <div className="text-lg">Full Stack Developer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
