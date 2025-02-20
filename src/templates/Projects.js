import React, { useState } from 'react';

export default function Projects() {
    // State to handle active category
    const [activeCategory, setActiveCategory] = useState('all');

    // Project data structure
    const projects = {
        personal: [
            {
                title: "Portfolio Website",
                description: "A modern, responsive portfolio built with React and styled with Apple's design principles",
                technologies: ["React", "JavaScript", "CSS"],
                link: "https://github.com/yourusername/portfolio",
                image: "/path-to-image.jpg",  // Add your project screenshot
                featured: true
            },
            // Add more personal projects
        ],
        academic: [
            {
                title: "Heart Rate Monitor",
                description: "Real-time heart rate monitoring system using computer vision and signal processing",
                technologies: ["Python", "OpenCV", "Signal Processing"],
                link: "https://github.com/yourusername/heart-rate-monitor",
                image: "/path-to-image.jpg",
                featured: true
            },
            // Add more academic projects
        ]
    };

    return (
        <div className="projects-container">
            {/* Hero Section */}
            <section className="projects-hero">
                <h1 className="projects-title">My Work</h1>
                <p className="projects-subtitle">A collection of personal and academic projects</p>
            </section>

            {/* Category Navigation */}
            <section className="projects-nav">
                <div className="nav-buttons">
                    <button 
                        className={`category-button ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        All Projects
                    </button>
                    <button 
                        className={`category-button ${activeCategory === 'personal' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('personal')}
                    >
                        Personal Projects
                    </button>
                    <button 
                        className={`category-button ${activeCategory === 'academic' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('academic')}
                    >
                        Academic Projects
                    </button>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="projects-grid">
                {/* Featured Projects */}
                {(activeCategory === 'all' || activeCategory === 'personal') && (
                    <div className="project-category">
                        <h2>Personal Projects</h2>
                        <div className="projects-row">
                            {projects.personal.map((project, index) => (
                                <div key={index} className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-technologies">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Academic Projects */}
                {(activeCategory === 'all' || activeCategory === 'academic') && (
                    <div className="project-category">
                        <h2>Academic Projects</h2>
                        <div className="projects-row">
                            {projects.academic.map((project, index) => (
                                <div key={index} className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-technologies">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}