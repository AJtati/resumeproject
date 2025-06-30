import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../content';

const AboutMe = forwardRef((props, ref) => {
  return (
    <motion.div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-16 pb-16 md:pt-24"
      style={{ backgroundImage: `url(${aboutMe.background})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-70 animate-gradient-xy z-10"></div>
      <motion.div
        className="relative z-20 bg-black bg-opacity-70 p-10 rounded-lg max-w-2xl w-11/12 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">{aboutMe.title}</h2>
        {aboutMe.paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
        ))}
      </motion.div>
    </motion.div>
  );
});

export default AboutMe;
