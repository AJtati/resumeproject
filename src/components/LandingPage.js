import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { landingPage } from '../content';

const LandingPage = forwardRef((props, ref) => {
  return (
    <motion.div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-24 pb-16"
      style={{ backgroundImage: `url(${landingPage.background})` }}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-70 animate-gradient-xy z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center bg-black bg-opacity-70 p-10 rounded-lg max-w-4xl w-11/12">
        <div className="text-center">
          <motion.div
            className="w-4/5 max-w-md h-px bg-white bg-opacity-30 my-5 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold uppercase tracking-widest my-2 opacity-0 transform translate-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {landingPage.title}<br />{landingPage.subtitle}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl uppercase tracking-wider my-2 opacity-0 transform translate-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {landingPage.intro}
          </motion.p>
          <motion.div
            className="w-4/5 max-w-md h-px bg-white bg-opacity-30 my-5 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
});

export default LandingPage;
