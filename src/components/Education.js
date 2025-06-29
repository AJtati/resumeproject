import React, { forwardRef } from 'react';
import { education } from '../content';

const Education = forwardRef((props, ref) => {
  return (
    <section id="education" className="section" ref={ref}>
      <h2>{education.title}</h2>
      {education.degrees.map((degree, index) => (
        <div className="education-item" key={index}>
          <h4>{degree.degree}</h4>
          <p className="education-item-muted">{degree.university} | {degree.period}</p>
        </div>
      ))}
    </section>
  );
});

export default Education;