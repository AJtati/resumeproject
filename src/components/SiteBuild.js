import React, { forwardRef, useEffect } from 'react';
import educationBackground from '../assets/education-background.jpg'; // Using existing image as placeholder

const SiteBuild = forwardRef((props, ref) => {
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

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0; // Scroll to top when component mounts
    }
  }, [ref]);

  return (
    <div className="site-build-page" style={pageStyle} ref={ref}>
      <div className="site-build-content-wrapper">
        <h2>Project Implementation Methods</h2>
        <p>
          This website was developed using a **Component-Based Architecture** with React, emphasizing modularity and reusability. The development followed an **Iterative and Agile Methodology**, allowing for continuous refinement and adaptation based on design goals and user feedback.
        </p>
        <p>
          Key aspects include:
          <ul>
            <li>**State Management:** Local component state (`useState`) for UI interactions (e.g., mobile navigation toggle, text animations).</li>
            <li>**Routing:** `React Router DOM` for client-side navigation, providing a Single-Page Application (SPA) experience.</li>
            <li>**Animations & Transitions:** `React Transition Group` combined with advanced CSS (`@keyframes`, `transform`, `filter`, `opacity`) for smooth page transitions and subtle element animations.</li>
            <li>**Responsive Design:** A **Mobile-First Approach** was adopted, utilizing CSS media queries (`@media`) and flexible layouts (`flexbox`) to ensure optimal viewing across various devices and screen sizes.</li>
            <li>**Styling:** Pure CSS with a focus on minimalism, dark themes, and elegant typography (Montserrat font).</li>
          </ul>
        </p>

        <h2>GitHub Repository</h2>
        <p>
          The complete source code for this project is available on GitHub:
          <br />
          <a href="https://github.com/AJtati/resumeproject" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>https://github.com/AJtati/resumeproject</a>
        </p>

        <h2>Wireframe Diagram (Conceptual)</h2>
        <pre style={{ textAlign: 'left', backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
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