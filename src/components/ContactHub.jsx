import React from 'react';
import './ContactHub.css';

export default function ContactHub({ data }) {
    return (
        <section className="contact-hub-section" id="contact">
            <div className="contact-hub-content glass-panel">
                <h2 className="contact-header">System.ready(); Let’s Connect</h2>
                <div className="cards-container">
                    <a href="mailto:test@example.com" className="contact-card">
                        <div className="card-glare"></div>
                        <h3>Email</h3>
                    </a>
                    <a href={data.linkedinLink} target="_blank" rel="noopener noreferrer" className="contact-card">
                        <div className="card-glare"></div>
                        <h3>LinkedIn</h3>
                    </a>
                    <a href={data.githubProfile} target="_blank" rel="noopener noreferrer" className="contact-card">
                        <div className="card-glare"></div>
                        <h3>GitHub</h3>
                    </a>
                </div>
            </div>
        </section>
    );
}
