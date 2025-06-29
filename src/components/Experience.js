import React, { forwardRef } from 'react';
import { experience } from '../content';

const Experience = forwardRef((props, ref) => {
  return (
    <section id="experience" className="section" ref={ref}>
      <h2>{experience.title}</h2>

      {experience.jobs.map((job, index) => (
        <div className="job" key={index}>
          <h3>{job.title}</h3>
          <p className="text-muted">{job.company} | {job.period}</p>
          <ul>
            {job.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="job">
        <h3>{experience.environment.title}</h3>
        <p className="environment-list">{experience.environment.text}</p>
      </div>
    </section>
  );
});

export default Experience;