import React from 'react';
import { Link } from 'react-router-dom';
import { bottomNav } from '../content';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      {bottomNav.map((item, index) => (
        <Link to={item.to} className="bottom-nav-link" key={index}>
          <span className="bottom-nav-icon">{item.icon}</span>
          <span className="bottom-nav-text">{item.text}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
