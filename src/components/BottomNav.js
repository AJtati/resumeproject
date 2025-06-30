import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bottomNav } from '../content';

const BottomNav = () => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 shadow-lg z-50 py-2.5 flex justify-around md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.5 }}
    >
      {bottomNav.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to={item.to} className="flex flex-col items-center justify-center flex-grow no-underline text-white font-bold">
            <span className="text-3xl">{item.icon}</span>
            <span className="text-sm mt-1">{item.text}</span>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default BottomNav;
