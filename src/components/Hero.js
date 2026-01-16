import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container-max text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Hi, I'm <span className="text-primary">Phoun Phan</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                        Full Stack Developer
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                        Passionate about creating beautiful, functional web applications that solve real-world problems.
                        I specialize in React, Node.js, and modern web technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="btn-primary inline-block"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="btn-secondary inline-block"
                        >
                            Get In Touch
                        </a>
                    </div>
                    <div className="mt-16">
                        <a
                            href="#about"
                            className="inline-block animate-bounce"
                        >
                            <svg
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
