import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="bottom-nav-link">
        <span className="bottom-nav-icon">🏠</span>
        <span className="bottom-nav-text">Home</span>
      </Link>
      <Link to="/about" className="bottom-nav-link">
        <span className="bottom-nav-icon">👤</span>
        <span className="bottom-nav-text">About</span>
      </Link>
      <Link to="/cv" className="bottom-nav-link">
        <span className="bottom-nav-icon">📄</span>
        <span className="bottom-nav-text">CV</span>
      </Link>
      <Link to="/site-build" className="bottom-nav-link">
        <span className="bottom-nav-icon">🛠️</span>
        <span className="bottom-nav-text">Site Build</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
