import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
    // State to track which section is expanded
    const [expandedSection, setExpandedSection] = useState(null);

    // Detailed content for each section
    const sectionContent = {
        education: {
            title: "Education",
            details: [
                {
                    degree: "B.S. Electrical and Computer Engineering",
                    school: "University of California San Diego",
                    year: "2020-2024",
                    description: "Focused on signal processing, embedded systems, and software development. Notable coursework includes digital signal processing, computer vision, and advanced programming techniques."
                }
                // Add more education entries
            ]
        },
        skills: {
            title: "Skills",
            categories: [
                {
                    name: "Programming Languages",
                    items: ["Python", "JavaScript", "C++", "MATLAB"]
                },
                {
                    name: "Web Technologies",
                    items: ["React", "Node.js", "HTML/CSS", "REST APIs"]
                },
                {
                    name: "Tools & Frameworks",
                    items: ["Git", "Docker", "TensorFlow", "OpenCV"]
                }
            ]
        },
        experience: {
            title: "Experience",
            positions: [
                {
                    role: "Software Engineering Intern",
                    company: "Company Name",
                    period: "Summer 2023",
                    achievements: [
                        "Developed real-time data processing pipeline",
                        "Implemented machine learning algorithms",
                        "Improved system efficiency by 40%"
                    ]
                }
                // Add more experience entries
            ]
        }
    };

    // Function to handle section expansion
    const toggleSection = (section) => {
        if (expandedSection === section) {
            setExpandedSection(null);
        } else {
            setExpandedSection(section);
        }
    };

    // Component for rendering detailed content
    const DetailedContent = ({ type, content }) => {
        switch (type) {
            case 'education':
                return (
                    <div className="detailed-content education">
                        {content.details.map((edu, index) => (
                            <motion.div 
                                key={index}
                                className="education-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4>{edu.degree}</h4>
                                <h5>{edu.school}</h5>
                                <p className="year">{edu.year}</p>
                                <p className="description">{edu.description}</p>
                            </motion.div>
                        ))}
                    </div>
                );

            case 'skills':
                return (
                    <div className="detailed-content skills">
                        {content.categories.map((category, index) => (
                            <motion.div 
                                key={index}
                                className="skill-category"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4>{category.name}</h4>
                                <div className="skill-tags">
                                    {category.items.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                );

            case 'experience':
                return (
                    <div className="detailed-content experience">
                        {content.positions.map((position, index) => (
                            <motion.div 
                                key={index}
                                className="experience-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4>{position.role}</h4>
                                <h5>{position.company}</h5>
                                <p className="period">{position.period}</p>
                                <ul>
                                    {position.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                );
        }
    };

    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">Creating meaningful experiences through technology and design</p>
            </section>

            {/* Introduction Section */}
            <section className="about-intro">
                <div className="content-wrapper">
                    <div className="text-column">
                        <h2>Who I Am</h2>
                        <p>Your compelling introduction goes here. Make it personal and engaging.</p>
                    </div>
                    <div className="image-column">
                        {/* Replace with your image */}
                        <div className="profile-image-placeholder"></div>
                    </div>
                </div>
            </section>

            {/* Enhanced Experience Section */}
            <section className="about-experience">
                <div className="content-wrapper">
                    <h2>My Journey</h2>
                    <div className="experience-grid">
                        {Object.entries(sectionContent).map(([key, section]) => (
                            <motion.div 
                                key={key}
                                className={`experience-card ${expandedSection === key ? 'expanded' : ''}`}
                                onClick={() => toggleSection(key)}
                                layout
                                transition={{
                                    layout: { duration: 0.3, ease: "easeOut" }
                                }}
                            >
                                <h3>{section.title}</h3>
                                <AnimatePresence>
                                    {expandedSection === key && (
                                        <DetailedContent type={key} content={section} />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}