import React from 'react';
import Seo from '../seo/Seo.jsx';

export default function FAQPage() {
  return (
    <>
      <Seo />
      <h1>FAQ</h1>

      <h2>Is this final grade calculator free?</h2>
      <p>Yes — all calculators and tools on this site are free to use.</p>

      <h2>Does it work with weighted finals?</h2>
      <p>
        Yes. Use the Quick Final Calculator if you only need current grade + final weight. For full syllabus accuracy,
        use the Class Planner with category weights.
      </p>

      <h2>Does it handle dropping the lowest quiz/homework?</h2>
      <p>
        Yes. Use the Drop Lowest tool, or enable “Drop lowest” inside a category in the Class Planner.
      </p>

      <h2>Why does my teacher’s grade differ slightly?</h2>
      <p>
        Teachers may round differently, drop specific assignments, weight categories differently, or include extra credit.
        Mirror your syllabus settings and rounding rules for the closest match.
      </p>

      <h2>Can I use this for college and high school?</h2>
      <p>Yes — it works for any course where grades can be represented as points/percentages and weighted categories.</p>

      <h2>Is my data stored?</h2>
      <p>
        The planner may store your entries in your browser (local storage) so you don’t lose your work. We don’t require
        accounts.
      </p>
    </>
  );
}
