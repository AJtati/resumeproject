import React, { forwardRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../reveal.css';
import educationBackground from '../assets/education-background.jpg'; // Using existing image as placeholder
import { siteBuild } from '../content';

const SiteBuild = forwardRef((props, ref) => {
  const [contentRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const pageStyle = {
    backgroundImage: `url(${educationBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div className="site-build-page" style={pageStyle} ref={ref}>
      <div 
        className={`site-build-content-wrapper reveal ${isIntersecting ? 'visible' : ''}`}
        ref={contentRef}
      >
        <h2>{siteBuild.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: siteBuild.intro }} />

        <h2>{siteBuild.howIbuiltIt.title}</h2>
        <p>{siteBuild.howIbuiltIt.intro}</p>

        <h3>{siteBuild.howIbuiltIt.planning.title}</h3>
        <ul>
          {siteBuild.howIbuiltIt.planning.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h3>{siteBuild.howIbuiltIt.development.title}</h3>
        <ul>
          {siteBuild.howIbuiltIt.development.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h3>{siteBuild.howIbuiltIt.versionControl.title}</h3>
        <ul>
          {siteBuild.howIbuiltIt.versionControl.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h3>{siteBuild.howIbuiltIt.deployment.title}</h3>
        <ul>
          {siteBuild.howIbuiltIt.deployment.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h3>{siteBuild.howIbuiltIt.maintenance.title}</h3>
        <ul>
          {siteBuild.howIbuiltIt.maintenance.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h2>{siteBuild.githubRepo.title}</h2>
        <p>
          {siteBuild.githubRepo.text}
          <br />
          <a href={siteBuild.githubRepo.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>{siteBuild.githubRepo.link}</a>
        </p>

        <h2>{siteBuild.deploymentUrl.title}</h2>
        <p>
          <a href={siteBuild.deploymentUrl.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>{siteBuild.deploymentUrl.link}</a>
        </p>

        <h2>{siteBuild.wireframe.title}</h2>
        <pre className="wireframe-diagram" style={{ textAlign: 'left', backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
          {siteBuild.wireframe.diagram}
        </pre>
      </div>
    </div>
  );
});

export default SiteBuild;