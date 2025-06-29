import React, { forwardRef, useEffect, useState } from 'react';
import { landingPage } from '../content';

const LandingPage = forwardRef((props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="landing-page-container" ref={ref}>
      <div className="overlay"></div>
      <div className="content-wrapper">
        <div className="title-block">
          <div className="horizontal-line"></div>
          <h1 className={isLoaded ? 'text-reveal' : ''}>{landingPage.title}<br />{landingPage.subtitle}</h1>
          <p className={`subtitle ${isLoaded ? 'text-reveal' : ''}`} style={{ animationDelay: '0.5s' }}>{landingPage.intro}</p>
          <div className="horizontal-line"></div>
        </div>
      </div>
    </div>
  );
});

export default LandingPage;
