import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import CV from './CV';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import SiteBuild from './components/SiteBuild'; // Import SiteBuild

function App() {
  const location = useLocation();
  const landingPageRef = useRef(null);
  const cvRef = useRef(null);
  const aboutMeRef = useRef(null);
  const siteBuildRef = useRef(null); // New ref for SiteBuild
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          nodeRef={location.pathname === '/' ? landingPageRef : (location.pathname === '/cv' ? cvRef : (location.pathname === '/about' ? aboutMeRef : siteBuildRef))}
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage ref={landingPageRef} />} />
            <Route path="/about" element={<AboutMe ref={aboutMeRef} />} />
            <Route path="/cv" element={<CV ref={cvRef} />} />
            <Route path="/site-build" element={<SiteBuild ref={siteBuildRef} />} /> {/* New Route */}
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
    <Router basename="/resumeproject">
      <App />
    </Router>
  );
}

export default Root;
