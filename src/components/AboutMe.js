import React, { forwardRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../reveal.css';
import summaryBackground from '../assets/summary-background.jpg';
import { aboutMe } from '../content';

const AboutMe = forwardRef((props, ref) => {
  const [contentRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const pageStyle = {
    backgroundImage: `url(${summaryBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div className="about-me-page" style={pageStyle} ref={ref}>
      <div 
        className={`about-me-content-wrapper reveal ${isIntersecting ? 'visible' : ''}`}
        ref={contentRef}
      >
        <h2>{aboutMe.title}</h2>
        {aboutMe.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
});

export default AboutMe;
