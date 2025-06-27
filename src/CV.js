import React, { forwardRef, useEffect } from 'react';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import skillsBackground from './assets/skills-background.jpg';
import './App.css';

const CV = forwardRef((props, ref) => {
  const cvPageStyle = {
    backgroundImage: `url(${skillsBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: '#ffffff',
    paddingTop: '20px',
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0; // Scroll to top when component mounts
    }
  }, [ref]);

  return (
    <div className="cv-page" style={cvPageStyle} ref={ref}>
      <Summary />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
});

export default CV;
