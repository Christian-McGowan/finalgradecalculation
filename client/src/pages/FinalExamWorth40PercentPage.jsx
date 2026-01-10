import React from 'react';
import Seo from '../seo/Seo.jsx';
import GradePlannerPage from '../features/grade-planner/GradePlannerPage.jsx';

export default function FinalExamWorth40PercentPage() {
  return (
    <>
      <Seo />
      <h1>Final Exam Worth 40%? What Do I Need on the Final?</h1>
      <p style={{ maxWidth: 900 }}>
        When your final is worth 40% of your course grade, it has a huge impact. Use the calculator below to see what
        score you need to hit your target grade. You can also adjust the weight if your final is worth a different percentage.
      </p>

      <GradePlannerPage />

      <h2>Tip</h2>
      <p style={{ maxWidth: 900 }}>
        If your syllabus uses categories (homework/quizzes/midterms/final), use the planner tab and set category weights
        to match your syllabus exactly.
      </p>
    </>
  );
}
