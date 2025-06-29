import React from 'react';
import { hero } from '../content';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1>{hero.title}</h1>
      <p className="lead">{hero.subtitle}</p>
    </section>
  );
}

export default Hero;
