import React, { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  // Close menu when navigating via browser back/forward etc.
  useEffect(() => {
    const onPop = () => setOpen(false);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="siteShell">
      <header className="topbar">
        <a className="brand" href="/" onClick={() => setOpen(false)}>
          FinalGradeCalculation.com
        </a>

        <nav className="navDesktop">
          <a href="/final-grade-calculator">Final Calculator</a>
          <a href="/grade-planner">Grade Planner</a>
          <a href="/weighted-grade-calculator">Weighted Grades</a>
          <a href="/faq">FAQ</a>
        </nav>

        <button
          className="hamburger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="hamburgerIcon">{open ? '✕' : '☰'}</span>
        </button>
      </header>

      {open && (
        <div className="navMobile" role="navigation" aria-label="Mobile navigation">
          <a href="/final-grade-calculator" onClick={() => setOpen(false)}>Final Calculator</a>
          <a href="/grade-planner" onClick={() => setOpen(false)}>Grade Planner</a>
          <a href="/weighted-grade-calculator" onClick={() => setOpen(false)}>Weighted Grades</a>
          <a href="/faq" onClick={() => setOpen(false)}>FAQ</a>
          <div className="navDivider" />
          <a href="/privacy-policy" onClick={() => setOpen(false)}>Privacy</a>
          <a href="/terms" onClick={() => setOpen(false)}>Terms</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}

      <main className="pageWrap">{children}</main>

      <footer className="footer">
        <a href="/privacy-policy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact</a>
        <span className="footerCopy">© {new Date().getFullYear()} FinalGradeCalculation.com</span>
      </footer>
    </div>
  );
}
