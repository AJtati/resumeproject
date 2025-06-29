import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import { cv } from './content';

const CV = forwardRef((props, ref) => {
  return (
    <motion.div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-24 pb-16"
      style={{ backgroundImage: `url(${cv.background})` }}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-70 animate-gradient-xy z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 w-11/12 max-w-4xl px-4"
      >
        <Experience />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-20 w-11/12 max-w-4xl"
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 w-11/12 max-w-4xl"
      >
        <Education />
      </motion.div>
    </motion.div>
  );
});

export default CV;
