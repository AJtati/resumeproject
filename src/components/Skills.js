import React, { forwardRef } from 'react';
import { skills } from '../content';

const Skills = forwardRef((props, ref) => {
  return (
    <section id="skills" className="section" ref={ref}>
      <h2>{skills.title}</h2>
      <ul className="skills-list">
        {skills.skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.category}:</strong> {skill.value}
          </li>
        ))}
      </ul>
    </section>
  );
});

export default Skills;