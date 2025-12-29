import React from 'react';
import Seo from '../seo/Seo.jsx';

export default function FAQPage() {
  return (
    <>
      <Seo />
      <h1>FAQ</h1>

      <h2>Is this final grade calculator free?</h2>
      <p>Yes — the calculator and planner are free to use.</p>

      <h2>Does it work with weighted finals?</h2>
      <p>
        Yes. Enter the final exam weight in the quick calculator. For full accuracy with a syllabus, use the Class
        Planner and set category weights.
      </p>

      <h2>Can I calculate grades with quizzes, homework, and midterms?</h2>
      <p>
        Yes. The Class Planner lets you create weighted categories and log assignment scores so your grade updates in
        real time.
      </p>

      <h2>Why does my teacher’s grade differ slightly?</h2>
      <p>
        Some teachers round differently or drop lowest scores. If your syllabus has special rules, mirror them in the
        planner as closely as possible.
      </p>
    </>
  );
}
