import React, { forwardRef } from 'react';
import { summary } from '../content';

const Summary = forwardRef((props, ref) => {
  return (
    <section id="summary" className="section" ref={ref}>
      <h2>{summary.title}</h2>
      <p>{summary.paragraph}</p>
    </section>
  );
});

export default Summary;