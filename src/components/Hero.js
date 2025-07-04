import React from 'react';
import { hero } from '../content';

function Hero() {
  return (
    <h1><span className="text-white">{hero.title}</span></h1>
      <p className="lead"><span className="text-gray-400 text-lg">{hero.subtitle}</span></p>
  );
}

export default Hero;
