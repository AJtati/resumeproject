import React, { forwardRef } from 'react';
// Removed educationBackground import

const Education = forwardRef((props, ref) => {
  // Removed sectionStyle

  return (
    <section id="education" className="section" ref={ref}>
      <h4>Master of Science in Computer Science</h4>
      <p className="text-muted">Teesside University | Jan 2021 - Jan 2023</p>
      <div className="education-item">
        <h4>Bachelor of Technology</h4>
        <p className="text-muted">Jawaharlal Nehru Technological University | 2012 - 2016</p>
      </div>
    </section>
  );
});

export default Education;
