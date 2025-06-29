import React, { forwardRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../reveal.css';
import educationBackground from '../assets/education-background.jpg'; // Using existing image as placeholder

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
        <h2>Project Implementation Methods</h2>
        <p>
          This website was developed using a <strong>Component-Based Architecture</strong> with React, emphasizing modularity and reusability. The development followed an <strong>Iterative and Agile Methodology</strong>, allowing for continuous refinement and adaptation based on design goals and user feedback.
        </p>

        <h2>How I Built This Website</h2>
        <p>
          This website was created to share my professional profile, CV, and personal information in a modern, accessible format. Below is a brief overview of how I planned, developed, and deployed this project.
        </p>

        <h3>1️⃣ Project Planning</h3>
        <ul>
          <li>Decided to build a personal resume website to showcase my skills, CV, and a bit about myself.</li>
          <li>Designed clear sections: Home, About Me, CV, and Site Build.</li>
        </ul>

        <h3>2️⃣ Development</h3>
        <ul>
          <li>Used HTML, CSS, and JavaScript (or React) for a single-page application (SPA) with smooth scrolling and seamless transitions.</li>
          <li>Made it fully responsive for desktop and mobile.</li>
          <li>Added reusable components for navigation, footer, and sections.</li>
          <li>Configured client-side routing with HashRouter for direct links on GitHub Pages.</li>
        </ul>

        <h3>3️⃣ Version Control ⚙️</h3>
        <ul>
          <li>Managed all code with Git.</li>
          <li>Pushed updates to a public GitHub repository.</li>
        </ul>

        <h3>4️⃣ Deployment</h3>
        <ul>
          <li>Hosted the site using GitHub Pages.</li>
          <li>Added a fallback 404.html to support client-side routing.</li>
          <li>Tested all pages and transitions to ensure a smooth experience.</li>
        </ul>

        <h3>5️⃣ Maintenance ✅</h3>
        <ul>
          <li>Continue to update and improve the site.</li>
        </ul>

        

        <h2>GitHub Repository</h2>
        <p>
          The complete source code for this project is available on GitHub:
          <br />
          <a href="https://github.com/AJtati/resumeproject" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>https://github.com/AJtati/resumeproject</a>
        </p>

        <h2>Deployment URL:</h2>
        <p>
          <a href="https://AJtati.github.io/resumeproject/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>https://AJtati.github.io/resumeproject/</a>
        </p>

        <h2>Wireframe Diagram (Conceptual)</h2>
        <pre className="wireframe-diagram" style={{ textAlign: 'left', backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
{`
+------------------------------------------------------------------+
| [GLOBAL HEADER]                                                  |
| [HOME] [ABOUT ME] [CV] [SITE BUILD]                              |
+------------------------------------------------------------------+
|                                                                  |
|                                                                  |
|                                                                  |
|                  +---------------------------------+             |
|                  | [BACKGROUND IMAGE/ANIMATED GRADIENT] |
|                  |                                 |             |
|                  |  +---------------------------+  |             |
|                  |  | [TEXT CONTENT BOX]        |  |             |
|                  |  |                           |  |             |
|                  |  |  AJITH THATI PERSONAL     |  |             |
|                  |  |  WEBSITE                  |  |             |
|                  |  |                           |  |             |
|                  |  |  MY PERSONAL WEBSITE...   |  |             |
|                  |  |                           |  |             |
|                  |  +---------------------------+  |             |
|                  |                                 |             |
|                  +---------------------------------+             |
|                                                                  |
|                                                                  |
|                                                                  |
+------------------------------------------------------------------+
| [GLOBAL FOOTER]                                                  |
| © AJITH THATI                                                    |
+------------------------------------------------------------------+


[MOBILE VIEW - HAMBURGER MENU OPEN]
+------------------------------------------------------------------+
| [HAMBURGER ICON]                                                 |
+------------------------------------------------------------------+
|                                                                  |
|                  +---------------------------+                   |
|                  | [OVERLAY MENU]            |                   |
|                  |                           |                   |
|                  |  [HOME]                   |                   |
|                  |  [ABOUT ME]               |                   |
|                  |  [CV]                     |                   |
|                  |  [SITE BUILD]             |                   |
|                  |                           |                   |
|                  +---------------------------+                   |
|                                                                  |
|                                                                  |
+------------------------------------------------------------------+
`}
        </pre>
      </div>
    </div>
  );
});

export default SiteBuild;