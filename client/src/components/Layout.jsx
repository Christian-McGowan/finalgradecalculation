import React from 'react';

const linkStyle = {
  color: '#cfe3ff',
  textDecoration: 'none',
  fontWeight: 700
};

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '16px 12px 36px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1050,
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }}
      >
        {/* Header / Nav */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '10px 12px',
            borderRadius: 16,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <a href="/" style={{ ...linkStyle, fontSize: 16 }}>
            FinalGradeCalculation.com
          </a>

          <nav style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="/final-grade-calculator" style={linkStyle}>Final Calculator</a>
            <a href="/grade-planner" style={linkStyle}>Grade Planner</a>
            <a href="/weighted-grade-calculator" style={linkStyle}>Weighted Grades</a>
            <a href="/faq" style={linkStyle}>FAQ</a>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer (trust + ads readiness + crawl paths) */}
        <footer
          style={{
            marginTop: 10,
            padding: '14px 12px',
            borderRadius: 16,
            background: 'rgba(255,255,255,0.035)',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}
        >
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/privacy-policy" style={linkStyle}>Privacy</a>
            <a href="/terms" style={linkStyle}>Terms</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>

          <div style={{ opacity: 0.75, fontSize: 13 }}>
            © {new Date().getFullYear()} FinalGradeCalculation.com — Free tools for students.
          </div>
        </footer>
      </div>
    </div>
  );
}
