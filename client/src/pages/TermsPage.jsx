import React from 'react';
import Seo from '../seo/Seo.jsx';

export default function TermsPage() {
  return (
    <>
      <Seo />
      <h1>Terms of Service</h1>
      <p style={{ maxWidth: 900 }}>
        This site provides educational tools and calculators “as is” with no warranty. You’re responsible for verifying
        results with your syllabus/teacher grading rules.
      </p>

      <h2>Acceptable use</h2>
      <p style={{ maxWidth: 900 }}>
        Don’t abuse the service, attempt to disrupt it, or use it for unlawful purposes.
      </p>

      <h2>Changes</h2>
      <p style={{ maxWidth: 900 }}>
        We may update these terms over time. Continued use means you accept the updated terms.
      </p>
    </>
  );
}
