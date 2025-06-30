import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { siteBuild } from '../content';

const SiteBuild = forwardRef((props, ref) => {
  return (
    <motion.div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-16 pb-16 md:pt-24"
      style={{ backgroundImage: `url(${siteBuild.background})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-70 animate-gradient-xy z-10"></div>
      <motion.div
        className="relative z-20 bg-black bg-opacity-70 p-10 rounded-lg max-w-4xl w-11/12 mt-10 mb-10 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">{siteBuild.title}</h2>
        <motion.p
          className="mb-4 text-base md:text-lg leading-relaxed text-left md:text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: siteBuild.intro }}
        />

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 mt-8">{siteBuild.howIbuiltIt.title}</h2>
        <motion.p
          className="mb-4 text-base md:text-lg leading-relaxed text-left md:text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {siteBuild.howIbuiltIt.intro}
        </motion.p>

        {Object.keys(siteBuild.howIbuiltIt).filter(key => key !== 'title' && key !== 'intro' && key !== 'technologiesUsed').map((sectionKey, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-2xl font-semibold mb-4 mt-6">{siteBuild.howIbuiltIt[sectionKey].title}</h3>
            <ul className="list-disc ml-5 mb-4">
              {siteBuild.howIbuiltIt[sectionKey].points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  className="mb-2 text-base md:text-lg text-left md:text-justify"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + sectionIndex * 0.1 + pointIndex * 0.05 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 mt-8">{siteBuild.howIbuiltIt.technologiesUsed.title}</h2>
        <ul className="list-disc ml-5 mb-4">
          {siteBuild.howIbuiltIt.technologiesUsed.points.map((tech, techIndex) => (
            <motion.li
              key={techIndex}
              className="mb-2 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + Object.keys(siteBuild.howIbuiltIt).length * 0.1 + techIndex * 0.05 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 mt-8">{siteBuild.githubRepo.title}</h2>
        <motion.p
          className="mb-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {siteBuild.githubRepo.text} <a href={siteBuild.githubRepo.link} target="_blank" rel="noopener noreferrer" className="font-bold text-white">GITHUB</a>
        </motion.p>

        

        
      </motion.div>
    </motion.div>
  );
});

export default SiteBuild;