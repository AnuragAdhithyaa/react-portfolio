import React, { useState, useEffect } from 'react';
import './About.css';

const About = ({ data }) => {
    const [typedText, setTypedText] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        if (!data.bioLines) return;

        if (lineIndex < data.bioLines.length) {
            if (charIndex < data.bioLines[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setTypedText((prev) => prev + data.bioLines[lineIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                }, 20); // Faster typing speed for longer text
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    if (lineIndex < data.bioLines.length - 1) {
                        setTypedText((prev) => prev + '\n\n'); // Paragraph breaks
                    }
                    setLineIndex(lineIndex + 1);
                    setCharIndex(0);
                }, 400); // Wait before next line
                return () => clearTimeout(timeout);
            }
        } else {
            setTypingComplete(true);
        }
    }, [charIndex, lineIndex, data.bioLines]);

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-image-wrapper">
                    <img src={data.photoPlaceholder} alt={data.name} className="about-image" />
                    <div className="image-accent-border"></div>
                </div>
                <div className="about-content">
                    <h2 className="section-title">
                        About Me
                    </h2>
                    <p className="bio-text typing-bio">
                        {typedText}
                        {!typingComplete && <span className="cursor-dark">|</span>}
                    </p>
                    <div className="action-buttons">
                        <a href={`/${data.cvFilename}`} target="_blank" rel="noopener noreferrer" className="download-btn">
                            Download CV
                        </a>
                        {data.linkedinLink && (
                            <a href={data.linkedinLink} target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                                LinkedIn
                            </a>
                        )}
                        {data.githubProfile && (
                            <a href={data.githubProfile} target="_blank" rel="noopener noreferrer" className="github-btn">
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
