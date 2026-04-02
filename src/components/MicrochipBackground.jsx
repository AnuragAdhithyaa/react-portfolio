import React, { useEffect, useState } from 'react';
import './MicrochipBackground.css';

export default function MicrochipBackground() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const generatedElements = [];
        // Generate 30 floating chips
        for (let i = 0; i < 30; i++) {
            generatedElements.push({
                id: `chip-${i}`,
                type: 'chip',
                left: `${Math.random() * 100}%`,
                top: `${(Math.random() * 200) - 50}%`,
                animationDuration: `${20 + Math.random() * 30}s`,
                animationDelay: `-${Math.random() * 20}s`,
                scale: 0.5 + Math.random() * 1.5,
                rotation: `${Math.random() * 360}deg`
            });
        }

        // Generate 20 glowing traces
        for (let i = 0; i < 20; i++) {
            generatedElements.push({
                id: `trace-${i}`,
                type: 'trace',
                left: `${Math.random() * 100}%`,
                top: `${(Math.random() * 200) - 50}%`,
                animationDuration: `${15 + Math.random() * 25}s`,
                animationDelay: `-${Math.random() * 15}s`,
                scale: 0.8 + Math.random() * 2,
                rotation: `${Math.random() * 360}deg`
            });
        }

        // Generate 40 data packets
        for (let i = 0; i < 40; i++) {
            generatedElements.push({
                id: `packet-${i}`,
                type: 'packet',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 150}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `-${Math.random() * 10}s`,
                scale: 0.5 + Math.random() * 0.5,
            });
        }

        setElements(generatedElements);
    }, []);

    return (
        <div className="microchip-void">
            {/* The deep vast void */}
            <div className="void-background"></div>

            {/* Core glow at the very bottom area */}
            <div className="glowing-core"></div>
            <div className="glowing-core-pulse"></div>

            <div className="floating-container">
                {elements.map((el) => {
                    const style = {
                        left: el.left,
                        top: el.top,
                        transform: `scale(${el.scale}) rotate(${el.rotation || '0deg'})`,
                        animationDuration: el.animationDuration,
                        animationDelay: el.animationDelay
                    };

                    if (el.type === 'chip') {
                        return (
                            <div key={el.id} className="floating-element float-chip" style={style}>
                                <div className="chip-inner">ARM</div>
                            </div>
                        );
                    } else if (el.type === 'trace') {
                        return (
                            <div key={el.id} className="floating-element float-trace" style={style}>
                                <div className="trace-path"></div>
                            </div>
                        );
                    } else if (el.type === 'packet') {
                        return <div key={el.id} className="floating-element data-packet" style={style}></div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
