import React, { forwardRef } from 'react';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './reveal.css';
import skillsBackground from './assets/skills-background.jpg';
import './App.css';

const CV = forwardRef((props, ref) => {
  const [experienceRef, isExperienceIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [skillsRef, isSkillsIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [educationRef, isEducationIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const cvPageStyle = {
    backgroundImage: `url(${skillsBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: '#ffffff',
    paddingTop: '20px',
  };

  return (
    <div className="cv-page" style={cvPageStyle} ref={ref}>
      <div ref={experienceRef} className={`reveal ${isExperienceIntersecting ? 'visible' : ''}`}>
        <Experience />
      </div>
      <div ref={skillsRef} className={`reveal ${isSkillsIntersecting ? 'visible' : ''}`}>
        <Skills />
      </div>
      <div ref={educationRef} className={`reveal ${isEducationIntersecting ? 'visible' : ''}`}>
        <Education />
      </div>
    </div>
  );
});

export default CV;
