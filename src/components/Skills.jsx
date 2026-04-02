import React from 'react';
import './Skills.css';

const Skills = ({ data }) => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">
                    Skills
                </h2>

                <div className="skills-grid">
                    {data.skills.map((skillGroup, index) => (
                        <div className="skill-category" key={index}>
                            <h3 className="category-title">{skillGroup.category}</h3>
                            <ul className="skill-list">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="skill-item">
                                        <span className="skill-icon">⚡</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
