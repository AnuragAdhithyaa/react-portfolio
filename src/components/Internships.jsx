import React from 'react';
import './Internships.css';

const Internships = ({ data }) => {
    return (
        <section id="internships" className="internships-section">
            <div className="container">
                <h2 className="section-title">
                    Experience
                </h2>

                <div className="timeline">
                    {data.internships.map((item, index) => (
                        <div className="timeline-item" key={item.id}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{item.title}</h3>
                                    <span className="duration">{item.duration}</span>
                                </div>
                                <div className="company-info">
                                    {item.logo && <img src={item.logo} alt={`${item.company} logo`} className="company-logo" />}
                                    <h4 className="company">{item.company}</h4>
                                </div>
                                <p className="description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
