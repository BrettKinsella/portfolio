import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    // Initialize the navigate function that we'll use for routing
    const navigate = useNavigate();

    // Create handler functions for our navigation buttons
    const handleLearnMore = () => {
        navigate('/about');  // This will navigate to your About page
    };

    const handleViewProjects = () => {
        navigate('/projects');  // This will navigate to your Projects page
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">Your Headline Here</h1>
                <p className="hero-subtitle">A compelling subtitle that captures your main value proposition</p>
                <div className="cta-buttons">
                    {/* Replace the regular buttons with onClick handlers */}
                    <button 
                        className="primary-button" 
                        onClick={handleLearnMore}
                    >
                        Learn more
                    </button>
                    <button 
                        className="secondary-button" 
                        onClick={handleViewProjects}
                    >
                        View projects
                    </button>
                </div>
            </section>
        </div>
    );
}