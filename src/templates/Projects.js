import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');
    // Add state for tracking which project's images are being viewed
    const [currentImageIndexes, setCurrentImageIndexes] = useState({});

    const projects = {
        personal: [
            {
                title: "Pneumatic Chip Manifold for CNC",
                description: "Designed and developed a pneumatic manifold for a CNC chip removal system which distributes high pressure air onto the parts surface in order to prevent end mill clogging, improving efficiency and effectiveness",
                technologies: [ "CNC Routing", "CAD/CAM"],
                //github: "https://github.com/yourusername/portfolio",
                //demo: "https://www.youtube.com/watch?v=peR8m5ZJymg",
                images: [
                    'Manifold-image',
                    'Manifold2-image'
                ]
            }, 
            {
                title: "Pneumatic Regulator for CNC",
                description: "Designed and developed a pneumatic regulator for a CNC chip removal system which utilizes pneumatic solenoid valves controlled by an Arduino to regulate the flow of air into a manifold",
                technologies: [ "Arduino", "Soldering"],
                //github: "https://github.com/yourusername/portfolio",
                //demo: "https://www.youtube.com/watch?v=peR8m5ZJymg",
                images: [
                    'Regulator-image'
                ]
            }
        ],
        academic: [
            {
                title: "Diffusion Cloud Chamber",
                description: "I led the design and development of a project to create a diffusion cloud chamber to detect both cosmic and terrestrial radiation",
                technologies: ["Arduino", "Soldering", "CNC Routing", "CAD/CAM"],
                youtube: "https://www.youtube.com/watch?v=peR8m5ZJymg",
                images: [
                    'Rod_Emission-gif',
                    'CC-image',
                    'CC2-image',
                    'DCC-image'
                ]
            },
            {
                title: "Autonomous Line Tracking Cart Robot",
                description: "I led the project to create an autonomous line tracking robot that utilizes photoresistors to detect a given path",
                technologies: ["Arduino", "MATLAB", "3D Printing", "CAD/CAM"],
                images: [
                    'ECE5-car-image',
                    'ECE5-poster-image'
                ]
            }
        ]
    };

    // Function to handle image navigation for a specific project
    const navigateImage = (projectId, direction, images) => {
        setCurrentImageIndexes(prev => ({
            ...prev,
            [projectId]: (((prev[projectId] || 0) + direction) + images.length) % images.length
        }));
    };

    const ProjectCard = ({ project, index, category }) => {
        const projectId = `${category}-${index}`;
        const currentImageIndex = currentImageIndexes[projectId] || 0;
    
        // We'll keep the isGif function but modify how we use it
        const isGif = (imageClass) => imageClass.toLowerCase().includes('gif');
    
        return (
            <div className="project-card">
                <div className="project-carousel">
                    <div className="carousel-rotadex">
                        {project.images.map((imageClass, imgIndex) => (
                            <motion.div
                                key={imgIndex}
                                className={`carousel-item`}
                                initial={false}
                                animate={{
                                    rotateY: (imgIndex - currentImageIndex) * (360 / project.images.length),
                                    z: imgIndex === currentImageIndex ? 200 : 0,
                                    opacity: imgIndex === currentImageIndex ? 1 : 0.3
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                            >
                                {/* We'll use the class directly since we've defined it in CSS */}
                                <div className={imageClass} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button 
                            className="carousel-button"
                            onClick={() => navigateImage(projectId, -1, project.images)}
                            aria-label="Previous image"
                        >
                            ←
                        </button>
                        <button 
                            className="carousel-button"
                            onClick={() => navigateImage(projectId, 1, project.images)}
                            aria-label="Next image"
                        >
                            →
                        </button>
                    </div>
                </div>
                <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        {project.github && (
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link github"
                            >
                                View on GitHub
                            </a>
                        )}
                        {project.demo && (
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link demo"
                            >
                                Live Demo
                            </a>
                        )}
                        {project.youtube && (
                            <a 
                                href={project.youtube} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link youtube"
                            >
                                Watch Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
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
                {(activeCategory === 'all' || activeCategory === 'personal') && (
                    <div className="project-category">
                        <h2>Personal Projects</h2>
                        <div className="projects-row">
                            {projects.personal.map((project, index) => (
                                <ProjectCard 
                                    key={index} 
                                    project={project} 
                                    index={index}
                                    category="personal"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {(activeCategory === 'all' || activeCategory === 'academic') && (
                    <div className="project-category">
                        <h2>Academic Projects</h2>  {/* Changed from "Personal Projects" */}
                        <div className="projects-row">
                            {projects.academic.map((project, index) => (  /* Changed from personal to academic */
                                <ProjectCard 
                                    key={index} 
                                    project={project} 
                                    index={index}
                                    category="academic"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}