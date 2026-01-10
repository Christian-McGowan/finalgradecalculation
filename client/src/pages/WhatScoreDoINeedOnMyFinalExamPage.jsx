import React from 'react';
import Seo from '../seo/Seo.jsx';
import GradePlannerPage from '../features/grade-planner/GradePlannerPage.jsx';

export default function WhatScoreDoINeedOnMyFinalExamPage() {
  return (
    <>
      <Seo />
      <h1>What Score Do I Need on My Final Exam?</h1>
      <p style={{ maxWidth: 900 }}>
        Enter your current grade, how much your final is worth, and your target course grade. The calculator will tell
        you the minimum final exam score needed — including edge cases like “already enough” or “impossible without extra credit.”
      </p>

      <GradePlannerPage />

      <h2>How the math works</h2>
      <p style={{ maxWidth: 900 }}>
        Your final grade is a weighted average: your current grade counts for the part of the course that’s already
        completed, and your final exam score counts for the final’s weight. If the required score is above 100%, it’s
        usually not possible unless extra credit or curve rules apply.
      </p>

      <p style={{ maxWidth: 900 }}>
        If your syllabus uses categories (homework/quizzes/midterms/final), switch to the planner tab and match your
        category weights for best accuracy.
      </p>
    </>
  );
}
