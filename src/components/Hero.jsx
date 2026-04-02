import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ data }) => {
    const [typedText, setTypedText] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < data.codingTextLines.length) {
            if (charIndex < data.codingTextLines[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setTypedText((prev) => prev + data.codingTextLines[lineIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                }, 30); // Typing speed
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setTypedText((prev) => prev + '\n');
                    setLineIndex(lineIndex + 1);
                    setCharIndex(0);
                }, 500); // Wait before next line
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, lineIndex, data.codingTextLines]);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <div className="code-container glass-panel" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.4)', boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }}>
                    <pre>
                        <code className="typing-text">{typedText}</code>
                        <span className="cursor">|</span>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Hero;
