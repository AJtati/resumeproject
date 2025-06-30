import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CV from './CV';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import SiteBuild from './components/SiteBuild'; // Import SiteBuild
import BottomNav from './components/BottomNav'; // Import BottomNav
import landingPageBackground from './assets/landingpage.jpg';
import logoT from './assets/logo1.png';



function App() {
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col min-h-screen text-white text-center relative overflow-x-hidden bg-cover bg-center" style={{ backgroundImage: `url(${landingPageBackground})` }}>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 py-4 z-50 shadow-lg flex justify-center items-center">
        {/* Mobile Logo (centered) */}
        <div className="md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center">
          <img src={logoT} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Logo (top-left) */}
        <div className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2">
          <img src={logoT} alt="Logo" className="h-10" />
        </div>

        <div className="md:hidden flex flex-col cursor-pointer p-2 absolute left-5 top-1/2 -translate-y-1/2 z-50" onClick={toggleNav}>
          <div className="w-6 h-0.5 bg-white my-1 transition-all duration-400"></div>
          <div className="w-6 h-0.5 bg-white my-1 transition-all duration-400"></div>
          <div className="w-6 h-0.5 bg-white my-1 transition-all duration-400"></div>
        </div>
        <nav className={`fixed top-0 ${isNavOpen ? 'left-0' : '-left-full'} w-full h-full bg-black bg-opacity-95 flex justify-center items-center transition-all duration-300 z-40 md:static md:w-auto md:h-auto md:bg-transparent`}>
          <ul className="flex flex-col gap-5 md:flex-row md:gap-8 list-none p-0 m-0">
            <li><Link to="/" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 md:text-lg" onClick={toggleNav}>HOME</Link></li>
            <li><Link to="/about" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 md:text-lg" onClick={toggleNav}>ABOUT ME</Link></li>
            <li><Link to="/cv" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 md:text-lg" onClick={toggleNav}>CV</Link></li>
            <li><Link to="/site-build" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 md:text-lg" onClick={toggleNav}>SITE BUILD</Link></li>
          </ul>
        </nav>
        <div className="flex gap-4 absolute right-5 top-1/2 -translate-y-1/2">
          <a href="tel:+447469475250" className="text-white text-2xl no-underline">📞</a>
          <a href="mailto:ajithsuryathati@gmail.com" className="text-white text-2xl no-underline">✉️</a>
          
        </div>
      </header>

      <AnimatePresence mode='wait'>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-grow select-none"
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/site-build" element={<SiteBuild />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="fixed bottom-0 left-0 w-full bg-black bg-opacity-80 py-2 z-50 text-sm tracking-wider opacity-70 flex justify-center items-center md:block hidden">
        <p>© AJITH SURYA THATI</p>
      </footer>
      <BottomNav />
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;