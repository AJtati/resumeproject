import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../content';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="p-8 my-5 relative bg-black bg-opacity-50 max-w-4xl rounded-lg text-left w-full select-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">{education.title}</h2>
      {education.degrees.map((degree, index) => (
        <motion.div
          className="mb-6"
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
        >
          <h4 className="text-xl font-semibold mb-1 text-white">{degree.degree}</h4>
          <p className="text-white text-sm md:text-base text-left md:text-justify">{degree.university} | <span className="font-bold text-lg">{degree.period}</span></p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Education;