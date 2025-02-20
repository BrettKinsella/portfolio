import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
    // State to track which section is expanded
    const [expandedSection, setExpandedSection] = useState(null);

    const ImageCarousel = () => {
        const images = [
            { name: 'profile', class: 'profile-image', alt: 'Profile Picture' },
            { name: 'snow', class: 'snow-image', alt: 'Snowboarding' },
            { name: 'biking', class: 'biking-image', alt: 'Mountain Biking' },
            { name: 'bike_camp', class: 'bike_camp-image', alt: 'Bike Camping' },
            { name: 'car_buried', class: 'car_buried-image', alt: 'Car in Snow' },
            { name: 'winter_camp', class: 'winter_camp-image', alt: 'Winter Camping' },
            { name: 'bike_drop', class: 'bike_drop-image', alt: 'Bike Drop' }
        ];
    
        const [currentIndex, setCurrentIndex] = useState(0);
    
        const nextImage = () => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        };
    
        const previousImage = () => {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };
    
        return (
            <div className="carousel-container">
                <div className="carousel-rotadex">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.name}
                            className={`carousel-item ${image.class}`}
                            initial={false}
                            animate={{
                                rotateY: (index - currentIndex) * (360 / images.length),
                                z: index === currentIndex ? 200 : 0,
                                opacity: index === currentIndex ? 1 : 0.3
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        />
                    ))}
                </div>
                <div className="carousel-controls">
                    <button 
                        className="carousel-button" 
                        onClick={previousImage}
                        aria-label="Previous image"
                    >
                        ←
                    </button>
                    <button 
                        className="carousel-button" 
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        →
                    </button>
                </div>
            </div>
        );
    };
    

    // Detailed content for each section
    const sectionContent = {
        education: {
            title: "Education",
            details: [
                {
                    degree: "B.S. Electrical and Computer Engineering",
                    school: "University of California San Diego",
                    year: "2023-Present",
                    gpa: 3.80,
                    description: "Focusing on machine learning, controls, and product engineering. Notable courses include Rapid Hardware & Software Design, Linear Control System Theory, The Art of Product Engineering and Introduction to Deep Learning and Applications."
                },

                {
                    degree: "A.S.T. Mathematics",
                    school: "SAN DIEGO MESA COLLEGE",
                    year: "2019-2023",
                    gpa: 3.88,
                    description: "Focused on developing the fundamentals needed to successfully develop engineering first principles upon transfer."
                }
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
                    items: ["Git", "Docker", "PyTorch", "OpenCV"]
                },
                {
                    name: "Manufacturing Technologies & Software",
                    items: ["FDM 3D-Printing", "CNC Routing", "Autodesk Fusion 360 CAD/CAM"]
                },
                {
                    name: "Hardware Development",
                    items: ["Arduino", "Soldering", "LTspice", "Vivado"]
                },
            ]
        },
        experience: {
            title: "Experience",
            positions: [
                {
                    role: "Computer Sales Associate",
                    company: "Best Buy",
                    period: "Nov 2019 - Feb 2020",
                    achievements: [
                        "Answered technical questions about products within department",
                        "Resolved problems customers came forth with and offered viable solutions",
                        "Assisted customers in selecting the right product for their budget and intended use"
                    ]
                },
                {
                    role: "Lift Operator",
                    company: "Alpine Meadows Ski Resort",
                    period: "March 2019 - May 2019",
                    achievements: [
                        "Responded to emergencies in a calm and helpful way",
                        "Supported customer needs by providing information and answering questions concerning facility, promotions, events and organizational rules and policies",
                        "Maintained loading and offloading snow ramps"
                    ]
                },
                {
                    role: "Overnight Stocker",
                    company: "Target",
                    period: "Nov 2018 - Jan 2019",
                    achievements: [
                        "Gathered assigned merchandise and transported to store floor locations using hand trucks",
                        "Unloaded trucks, stocked shelves and carried merchandise out on the floor for customers"
                    ]
                },
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
                                initial={{ opacity: 0, y: 8 }}     // Subtle initial offset
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.2,                 // Quick but noticeable
                                    delay: index * 0.05,           // Slight delay between items
                                    ease: "easeOut"                // Smooth fade in
                                }}
                            >
                                <h4>{edu.degree}</h4>
                                <h5>{edu.school}</h5>
                                <p className="year">GPA: {edu.gpa}</p>
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
                                initial={{ opacity: 0, y: 8 }}     // Subtle initial offset
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.2,                 // Quick but noticeable
                                    delay: index * 0.05,           // Slight delay between items
                                    ease: "easeOut"                // Smooth fade in
                                }}
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
                             initial={{ opacity: 0, y: 8 }}     // Subtle initial offset
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ 
                                 duration: 0.2,                 // Quick but noticeable
                                 delay: index * 0.05,           // Slight delay between items
                                 ease: "easeOut"                // Smooth fade in
                             }}
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
            </section>

            {/* Introduction Section */}
            <section className="about-intro">
                <div className="content-wrapper">
                    <div className="text-column">
                        <h2>Who I Am</h2>
                        <p>Hi, I'm Brett Kinsella.  I'm a 2nd year transfer student at UCSD majoring in electrical engineering.  I was born and raised in Silicon Valley and moved to San Diego shortly after high school.  
                        I took a gap year following high school where I worked at a ski resort in Lake Tahoe for the winter season.  When I'm not occupied with school, I enjoy snowboarding, surfing, mountain biking, camping and really anything outdoors related.
                        </p>
                        <p>I’m a fast learner who is willing to put in the effort to succeed and am deeply curious about the natural world. While my professional engineering experience is limited, I believe I can add value to any setting by being intellectually flexible and determined to produce creative solutions.
                             I am motivated to begin my professional career and willing to go the extra mile to produce results.
                        </p>
                    </div>
                    <div className="image-column">
                        <ImageCarousel />
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
                                layout: {
                                    duration: 0.3,           // A shorter duration feels more responsive
                                    ease: "easeInOut"        // Simple, smooth transition without bouncing
                                }
                            }}
                        >
                            <h3>{section.title}</h3>
                            <AnimatePresence mode="wait">
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