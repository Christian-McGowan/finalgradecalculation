import React from 'react';
import Seo from '../seo/Seo.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo />
      <h1>Page not found</h1>
      <p style={{ maxWidth: 900 }}>
        That page doesn’t exist. Try one of these:
      </p>
      <ul>
        <li><a href="/tools">All tools</a></li>
        <li><a href="/final-grade-calculator">Final grade calculator</a></li>
        <li><a href="/what-score-do-i-need-on-my-final-exam">What score do I need?</a></li>
        <li><a href="/grade-planner">Grade planner</a></li>
      </ul>
    </>
  );
}
