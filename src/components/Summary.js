import React, { forwardRef } from 'react';
// Removed summaryBackground import

const Summary = forwardRef((props, ref) => {
  // Removed sectionStyle

  return (
    <section id="summary" className="section" ref={ref}>
      <h2>Summary</h2>
      <p>
        Skilled DevOps Engineer with 8+ years of experience in Agile methodology, supporting, automating, and optimizing critical deployments in cloud-native tools, AWS, and Azure, leveraging
        configuration management, CI/CD, and DevOps processes. Proficient in problem-solving and tackling issues promptly with strong verbal and communication skills. Self-motivated, quick learner, and team
        player with the ability to take independent responsibility and contribute to the team.
      </p>
    </section>
  );
});

export default Summary;
