import React from 'react';
import Seo from '../seo/Seo.jsx';
import GradePlannerPage from '../features/grade-planner/GradePlannerPage.jsx';

export default function GradePlannerLandingPage() {
  return (
    <>
      <Seo />
      <h1>Class Grade Planner</h1>
      <p style={{ maxWidth: 900 }}>
        Build your class like a syllabus: create categories (homework, quizzes, labs, midterms, final), set the weights,
        then log assignment scores. This gives you a live course grade and helps you plan what you need to hit your goal.
      </p>
      <GradePlannerPage />
    </>
  );
}
