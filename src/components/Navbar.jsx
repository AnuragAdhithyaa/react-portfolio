import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>AA.</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
                <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
                <li><a href="#internships" onClick={(e) => handleScroll(e, 'internships')}>Internships</a></li>
                <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
                <li><a href="#certificates" onClick={(e) => handleScroll(e, 'certificates')}>Certificates</a></li>
                <li><a href="#courses" onClick={(e) => handleScroll(e, 'courses')}>Courses</a></li>
                <li><a href="#cv" onClick={(e) => handleScroll(e, 'cv')} className="cv-btn">CV</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
