import React, { forwardRef } from 'react';
import summaryBackground from '../assets/summary-background.jpg';
// Removed HomeButton import

const AboutMe = forwardRef((props, ref) => {
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
      {/* Removed HomeButton */}
      <div className="about-me-content-wrapper">
        <h2>About Me</h2>
        <p>
          Welcome! I'm Ajith Thati, a DevOps Engineer with over 8 years of experience, specializing in transforming complex challenges into streamlined, automated solutions. My journey in Agile environments has honed my ability to not only build and optimize critical deployments across AWS and Azure but also to anticipate and resolve issues with precision.
        </p>
        <p>
          Beyond traditional infrastructure, my expertise extends to the cutting edge of problem-solving, particularly in the realm of prompt engineering. Just as I architect robust CI/CD pipelines and manage intricate cloud resources, I apply a similar systematic approach to crafting effective prompts for AI. This involves a deep understanding of system behavior, iterative refinement, and a keen eye for detail – skills directly transferable from optimizing cloud-native tools to eliciting optimal responses from advanced models.
        </p>
        <p>
          I thrive on continuous learning and am a dedicated team player, always ready to take independent responsibility and contribute to innovative solutions. Whether it's automating infrastructure or engineering the perfect prompt, my goal remains consistent: to deliver efficient, reliable, and impactful results.
        </p>
      </div>
    </div>
  );
});

export default AboutMe;