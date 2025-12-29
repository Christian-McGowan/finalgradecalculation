import React from 'react';
import Seo from '../seo/Seo.jsx';
import GradePlannerPage from '../features/grade-planner/GradePlannerPage.jsx';

export default function HomePage() {
  return (
    <>
      <Seo />
      <section style={{ padding: '10px 4px 6px' }}>
        <h1 style={{ margin: '6px 0 6px', fontSize: 38, lineHeight: 1.12 }}>
          Final Grade Calculator & Class Planner
        </h1>
        <p style={{ maxWidth: 850, opacity: 0.9, marginTop: 0 }}>
          Instantly see what score you need on your final exam to reach your target grade, and plan your whole class
          with weighted categories (homework, quizzes, midterms, finals).
        </p>
      </section>

      <GradePlannerPage />
    </>
  );
}
