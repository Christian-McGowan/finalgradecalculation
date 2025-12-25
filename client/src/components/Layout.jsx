import React from 'react';
import AdBanner from './AdBanner.jsx';

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '18px 12px 32px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* Outer container uses full screen, inner max width for readability */}
      <div
        style={{
          width: '100%',
          maxWidth: 1400, // a bit narrower but the center column can now use all free space
          margin: '0 auto',
          display: 'grid',
          // side rails fixed, center is flexible and fills the rest
          gridTemplateColumns: '160px minmax(0, 1fr) 160px',
          gap: 18,
          alignItems: 'flex-start'
        }}
      >
        {/* LEFT AD RAIL */}
        <aside
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            position: 'sticky',
            top: 12,
            height: 'fit-content'
          }}
        >
          <AdBanner slot="left-top" style={{ minHeight: 220 }} />
          <AdBanner slot="left-middle" style={{ minHeight: 220 }} />
        </aside>

        {/* CENTER CONTENT */}
        <div>
          {/* Top banner ad above main hero */}
          <AdBanner
            slot="top-banner"
            style={{ marginBottom: 16, minHeight: 60 }}
          />

          <header style={{ marginBottom: 20 }}>
            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(32px, 4.5vw, 46px)',
                fontWeight: 900,
                background:
                  'linear-gradient(90deg, #8ea8ff, #a879ff, #59d0ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Final Grade Calculator & Class Planner
            </h1>
            <p
              style={{
                margin: '6px 0 0',
                maxWidth: 640,
                color: '#b4c2ff',
                fontSize: 14
              }}
            >
              Instantly see what you need on your final exam to reach your
              target grade, and plan your entire class with quizzes, homework,
              midterms, and finals in one simple dashboard.
            </p>
          </header>

          <main>{children}</main>

          {/* Bottom in-content ad for long sessions */}
          <section style={{ marginTop: 16 }}>
            <AdBanner
              slot="bottom-in-content"
              style={{ minHeight: 80 }}
            />
          </section>
        </div>

        {/* RIGHT AD RAIL */}
        <aside
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            position: 'sticky',
            top: 12,
            height: 'fit-content'
          }}
        >
          <AdBanner slot="right-top" style={{ minHeight: 220 }} />
          <AdBanner slot="right-middle" style={{ minHeight: 220 }} />
        </aside>
      </div>

      {/* Mobile fallback: stack everything if screen is narrow */}
      <style>
        {`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 160px minmax(0, 1fr) 160px"] {
            grid-template-columns: minmax(0, 1fr);
          }
          div[style*="position: sticky"][style*="flex-direction: column"] {
            position: static !important;
            order: 2;
          }
        }
      `}
      </style>
    </div>
  );
}
