import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import CV from './CV';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';

function App() {
  const location = useLocation();
  const landingPageRef = useRef(null);
  const cvRef = useRef(null);
  const aboutMeRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
      <header className="global-header">
        <div className="hamburger-menu" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            <li><Link to="/" className="nav-link" onClick={toggleNav}>HOME</Link></li>
            <li><Link to="/about" className="nav-link" onClick={toggleNav}>ABOUT ME</Link></li>
            <li><Link to="/cv" className="nav-link" onClick={toggleNav}>CV</Link></li>
            <li><Link to="/site-build" className="nav-link" onClick={toggleNav}>SITE BUILD</Link></li>
            
          </ul>
        </nav>
      </header>

      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
          nodeRef={location.pathname === '/' ? landingPageRef : (location.pathname === '/cv' ? cvRef : aboutMeRef)}
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage ref={landingPageRef} />} />
            <Route path="/about" element={<AboutMe ref={aboutMeRef} />} />
            <Route path="/cv" element={<CV ref={cvRef} />} />
            {/* Add routes for Site Build and Socials later if needed */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <footer className="global-footer">
        <p>© AJITH THATI</p>
      </footer>
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
