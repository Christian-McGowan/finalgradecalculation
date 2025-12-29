import React from 'react';
import Seo from '../seo/Seo.jsx';
import GradePlannerPage from '../features/grade-planner/GradePlannerPage.jsx';

export default function FinalGradeCalculatorPage() {
  return (
    <>
      <Seo />
      <h1>Final Grade Calculator</h1>
      <p style={{ maxWidth: 900 }}>
        Use this tool to calculate the score you need on your final exam. Enter your current grade, the final exam
        weight, and the grade you want in the class — we’ll compute the minimum final exam score needed.
      </p>
      <p style={{ maxWidth: 900 }}>
        Tip: If your class uses weighted categories (homework/quizzes/midterms/final), switch to the Class Planner tab
        to match your syllabus exactly.
      </p>
      <GradePlannerPage />
    </>
  );
}
