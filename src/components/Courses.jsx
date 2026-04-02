import React from 'react';
import './Courses.css'; // Changed from Placeholders.css

const Courses = ({ data }) => {
    if (!data.courses || data.courses.length === 0) return null;

    return (
        <section id="courses" className="courses-section">
            <div className="container">
                <h2 className="section-title">
                    Courses
                </h2>

                <div className="courses-grid">
                    {data.courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <span className="course-icon">🎓</span>
                            <h4 className="course-title">{course}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
