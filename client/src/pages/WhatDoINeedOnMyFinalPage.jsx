import React from 'react';
import Seo from '../seo/Seo.jsx';
import GradePlannerPage from '../features/grade-planner/GradePlannerPage.jsx';

export default function WhatDoINeedOnMyFinalPage() {
  return (
    <>
      <Seo />
      <h1>What Do I Need on My Final?</h1>
      <p style={{ maxWidth: 900 }}>
        This is one of the most common questions students ask at the end of the term. The answer depends on your current
        grade and how much the final exam is worth. Use the calculator below to get the exact number.
      </p>
      <h2>How it works</h2>
      <p style={{ maxWidth: 900 }}>
        If your current grade is strong and the final exam weight is small, you may only need a modest score. If the
        final is heavily weighted, the final exam score has a bigger impact. Our tool handles the math automatically.
      </p>
      <GradePlannerPage />
    </>
  );
}
