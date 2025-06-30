import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../content';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="p-8 my-5 relative bg-black bg-opacity-50 max-w-4xl rounded-lg text-left w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">{skills.title}</h2>
      <ul className="list-none p-0">
        {skills.skills.map((skill, index) => (
          <motion.li
            key={index}
            className="mb-2 text-lg md:text-xl text-left md:text-justify"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
          >
            <strong className="text-blue-400">{skill.category}:</strong> {skill.value}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;