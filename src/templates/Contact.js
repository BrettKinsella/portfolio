import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    // Create a ref for the form
    const form = useRef();

    // Add state for notification
    const [notification, setNotification] = useState({
        show: false,
        type: '',
        message: '',
        icon: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const result = await emailjs.sendForm(
                'service_fyiwbwm',      // Your service ID
                'template_nauzr7d',     // Your template ID
                form.current,           // Reference to the form
                '1mYyb-S-6UhhOs6g3'    // Your public key
            )
            
            if (result.text === 'OK') {
                setNotification({
                    show: true,
                    type: 'success',
                    message: "Thanks for reaching out! I'll get back to you soon."
                });
                form.current.reset();
                // Auto-hide after 5 seconds
                setTimeout(() => {
                    setNotification({ show: false, type: '', message: '' });
                }, 5000);
            }
        } catch (error) {
            setNotification({
                show: true,
                type: 'error',
                message: "Something went wrong. Please try again or email me directly."
            });
        }
    };
    

    return (
        <div className="contact-container">
            <section className="contact-hero">
                <h1 className="contact-title">Let's Connect</h1>
                <p className="contact-subtitle">Have a project in mind? I'd love to hear about it.</p>
            </section>

            <section className="contact-content">
                {notification.show && (
                    <div className="notification-overlay">
                        <div className="notification-content">
                            <div className="notification-icon">
                                {notification.type === 'success' ? '✓' : 'ⓘ'}
                            </div>
                            <div className="notification-message">
                                {notification.type === 'success' 
                                    ? "Thanks for reaching out! I'll get back to you soon."
                                    : "Something went wrong. Please try again or email me directly."}
                            </div>
                            <button 
                                className="notification-button"
                                onClick={() => setNotification({ show: false, type: '', message: '' })}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}

                <div className="content-wrapper">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Location</h3>
                            <p>San Diego, California</p>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>brettkinsella1@gmail.com</p>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">💼</div>
                            <h3>Work</h3>
                            <p>Open for opportunities</p>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {/* Note the ref={form} and onSubmit={sendEmail} */}
                        <form ref={form} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="user_name" // EmailJS will use this name
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email"
                                    name="user_email" // EmailJS will use this name
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="message" // EmailJS will use this name
                                    placeholder="Your Message"
                                    required
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="submit-button"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
