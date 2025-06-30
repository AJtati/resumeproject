import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../content';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="p-8 my-5 relative bg-black bg-opacity-50 max-w-4xl rounded-lg text-left w-full select-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">{experience.title}</h2>

      {experience.jobs.map((job, index) => (
        <motion.div
          className="mb-6"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-1 text-white">{job.title}</h3>
          <p className="text-gray-400 text-sm">{job.company} | {job.period}</p>
          <ul className="list-disc ml-5 mt-2">
            {job.tasks.map((task, i) => (
              <li key={i} className="mb-1 text-base md:text-lg text-left md:text-justify">{task}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 + experience.jobs.length * 0.1 }}
      >
        <h3 className="text-xl font-semibold mb-1 text-white">{experience.environment.title}</h3>
        <p className="text-white text-base">{experience.environment.text}</p>
      </motion.div>
    </motion.section>
  );
};

export default Experience;