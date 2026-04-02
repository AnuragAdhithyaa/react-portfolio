import React, { useState, useRef } from 'react';
import './Certificates.css';

const Certificates = ({ data }) => {
    const [selectedCert, setSelectedCert] = useState(null);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    if (!data.certificates || data.certificates.length === 0) return null;

    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <h2 className="section-title">
                    Certificates
                </h2>

                <div className="carousel-wrapper">
                    <button className="nav-btn left-btn" onClick={scrollLeft} aria-label="Scroll left">
                        &#10094;
                    </button>

                    <div className="certificates-carousel" ref={scrollContainerRef}>
                        {data.certificates.map((cert) => (
                            <div
                                className="certificate-card"
                                key={cert.id}
                                onClick={() => setSelectedCert(cert)}
                            >
                                <div className="cert-preview-wrapper">
                                    {cert.type === 'pdf' ? (
                                        <div className="pdf-preview">
                                            <span className="pdf-icon">📄</span>
                                            <span className="pdf-label">PDF Document</span>
                                        </div>
                                    ) : (
                                        <img src={cert.file} alt={cert.title} className="cert-thumb" />
                                    )}
                                    <div className="view-overlay">
                                        <span>Click to View</span>
                                    </div>
                                </div>
                                <h4 className="cert-title">{cert.title}</h4>
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn right-btn" onClick={scrollRight} aria-label="Scroll right">
                        &#10095;
                    </button>
                </div>
            </div>

            {/* Modal for full screen view */}
            {selectedCert && (
                <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedCert(null)}>
                            &times;
                        </button>
                        <h3 className="modal-title">{selectedCert.title}</h3>

                        <div className="modal-body">
                            {selectedCert.type === 'pdf' ? (
                                <iframe
                                    src={`${selectedCert.file}#toolbar=0`}
                                    className="cert-iframe"
                                    title={selectedCert.title}
                                />
                            ) : (
                                <img src={selectedCert.file} alt={selectedCert.title} className="cert-full-image" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
