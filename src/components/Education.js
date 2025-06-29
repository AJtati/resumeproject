import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {
  return (
    <section id="education" className="section" ref={ref}>
      <h2>Education</h2>
      <div className="education-item">
        <h4>Master of Science in Computer Science</h4>
        <p className="education-item-muted">Teesside University | Jan 2021 - Jan 2023</p>
      </div>
      <div className="education-item">
        <h4>Bachelor of Technology</h4>
        <p className="education-item-muted">Jawaharlal Nehru Technological University | 2012 - 2016</p>
      </div>
    </section>
  );
});

export default Education;