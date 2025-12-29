import React from 'react';
import Seo from '../seo/Seo.jsx';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfnPHaG1tJk1CgudeMVeJU-Fi4sTOZHc9-GI7nYTFR4raDP9Q/viewform';

export default function ContactPage() {
  return (
    <>
      <Seo />

      <h1>Contact</h1>

      <p style={{ maxWidth: 900 }}>
        Have feedback, a bug to report, or a feature request? Use the contact form below and we’ll review it as soon as
        possible.
      </p>

      <p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 16px',
            borderRadius: 14,
            fontWeight: 800,
            fontSize: 16,
            textDecoration: 'none',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.14)',
            color: 'inherit'
          }}
        >
          Open Contact Form
        </a>
      </p>

      <p style={{ maxWidth: 900, opacity: 0.85 }}>
        Please don’t include sensitive personal information. If you prefer email, you can also reach us at{' '}
        <b>support@finalgradecalculation.com</b>.
      </p>
    </>
  );
}
