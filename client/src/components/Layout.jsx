import React from 'react';
import AdBanner from './AdBanner.jsx';

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '18px 12px 32px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      {/* Outer container uses full screen, inner max width for readability */}
      <div
        className="layoutGrid"
        style={{
          width: '100%',
          maxWidth: 1400,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '160px minmax(0, 1fr) 160px',
          gap: 18,
          alignItems: 'flex-start'
        }}
      >
        {/* LEFT AD RAIL */}
        <aside
          className="adRail"
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
        <div className="centerCol" style={{ minWidth: 0 }}>
          {/* Top banner ad above main hero */}
          <AdBanner slot="top-banner" style={{ marginBottom: 16, minHeight: 60 }} />

          <header style={{ marginBottom: 20 }}>
            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(32px, 4.5vw, 46px)',
                fontWeight: 900,
                background: 'linear-gradient(90deg, #8ea8ff, #a879ff, #59d0ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.08
              }}
            >
              Final Grade Calculator & Class Planner
            </h1>

            <p
              style={{
                margin: '10px 0 0',
                maxWidth: 720,
                color: '#b4c2ff',
                fontSize: 14,
                lineHeight: 1.4,
                overflowWrap: 'anywhere'
              }}
            >
              Instantly see what you need on your final exam to reach your target grade,
              and plan your entire class with quizzes, homework, midterms, and finals in
              one simple dashboard.
            </p>
          </header>

          <main style={{ minWidth: 0 }}>{children}</main>

          {/* Bottom in-content ad for long sessions */}
          <section className="bottomAd" style={{ marginTop: 16 }}>
            <AdBanner slot="bottom-in-content" style={{ minHeight: 80 }} />
          </section>
        </div>

        {/* RIGHT AD RAIL */}
        <aside
          className="adRail"
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

      {/* Mobile rules: make center full width; hide side rails; keep ads snug */}
      <style>{`
        @media (max-width: 900px) {
          .layoutGrid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 14px !important;
          }
          .adRail {
            display: none !important;
          }
          .centerCol {
            width: 100% !important;
          }
          .bottomAd {
            margin-top: 12px !important;
          }
        }

        /* Smaller phones: tighten padding a bit */
        @media (max-width: 420px) {
          .layoutGrid {
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
