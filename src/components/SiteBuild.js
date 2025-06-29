import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { siteBuild } from '../content';

const SiteBuild = forwardRef((props, ref) => {
  return (
    <motion.div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-24 pb-16"
      style={{ backgroundImage: `url(${siteBuild.background})` }}
      ref={ref}
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
          className="mb-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: siteBuild.intro }}
        />

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 mt-8">{siteBuild.howIbuiltIt.title}</h2>
        <motion.p
          className="mb-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {siteBuild.howIbuiltIt.intro}
        </motion.p>

        {Object.keys(siteBuild.howIbuiltIt).filter(key => key !== 'title' && key !== 'intro').map((sectionKey, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-2xl font-semibold mb-4 mt-6">{siteBuild.howIbuiltIt[sectionKey].title}</h3>
            <ul className="list-disc ml-5 mb-4">
              {siteBuild.howIbuiltIt[sectionKey].points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  className="mb-2 text-lg"
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

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 mt-8">{siteBuild.githubRepo.title}</h2>
        <motion.p
          className="mb-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {siteBuild.githubRepo.text}
          <br />
          <a href={siteBuild.githubRepo.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-words">
            {siteBuild.githubRepo.link}
          </a>
        </motion.p>

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 mt-8">{siteBuild.deploymentUrl.title}</h2>
        <motion.p
          className="mb-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href={siteBuild.deploymentUrl.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-words">
            {siteBuild.deploymentUrl.link}
          </a>
        </motion.p>

        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 mt-8">{siteBuild.wireframe.title}</h2>
        <motion.pre
          className="bg-gray-800 bg-opacity-50 p-4 rounded-lg overflow-x-auto text-left text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          {siteBuild.wireframe.diagram}
        </motion.pre>
      </motion.div>
    </motion.div>
  );
});

export default SiteBuild;