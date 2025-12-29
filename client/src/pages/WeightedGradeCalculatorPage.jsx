import React from 'react';
import Seo from '../seo/Seo.jsx';
import GradePlannerPage from '../features/grade-planner/GradePlannerPage.jsx';

export default function WeightedGradeCalculatorPage() {
  return (
    <>
      <Seo />
      <h1>Weighted Grade Calculator</h1>
      <p style={{ maxWidth: 900 }}>
        Many classes use weighted grading: homework might be 20%, quizzes 15%, midterms 25%, and the final 40%.
        That means the final course grade is a weighted average — not just points earned.
      </p>
      <h2>Best practice</h2>
      <p style={{ maxWidth: 900 }}>
        Use the Class Planner to enter the same categories and weights from your syllabus. Then log scores as you go to
        keep a real-time grade (and instantly see how different final exam scores affect the outcome).
      </p>
      <GradePlannerPage />
    </>
  );
}
