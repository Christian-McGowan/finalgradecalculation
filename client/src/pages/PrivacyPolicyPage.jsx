import React from 'react';
import Seo from '../seo/Seo.jsx';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo />
      <h1>Privacy Policy</h1>
      <p style={{ maxWidth: 900 }}>
        We aim to collect as little data as possible. This site may use cookies for basic functionality, analytics, and
        advertising (once enabled). We do not ask you to submit personal information to use the calculator.
      </p>

      <h2>Analytics</h2>
      <p style={{ maxWidth: 900 }}>
        If analytics are enabled, we may collect anonymous usage data (pages visited, device type, approximate location,
        and similar) to improve the site.
      </p>

      <h2>Advertising</h2>
      <p style={{ maxWidth: 900 }}>
        If ads are enabled, third-party ad networks may use cookies or similar technologies to show relevant ads and
        measure performance.
      </p>

      <h2>Contact</h2>
      <p style={{ maxWidth: 900 }}>
        Questions? Use the <a href="/contact">contact page</a>.
      </p>
    </>
  );
}
