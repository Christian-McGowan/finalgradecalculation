import React, { useEffect, useState } from 'react';

const NAV = [
  { href: '/final-grade-calculator', label: 'Final Calculator' },
  { href: '/what-score-do-i-need-on-my-final-exam', label: 'What Score Needed' },
  { href: '/drop-lowest-grade-calculator', label: 'Drop Lowest' },
  { href: '/grade-planner', label: 'Grade Planner' },
  { href: '/tools', label: 'All Tools' },
  { href: '/faq', label: 'FAQ' }
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onPop = () => setOpen(false);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Close menu on resize up
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="siteShell">
      <header className="topbar">
        <a className="brand" href="/" onClick={() => setOpen(false)}>
          FinalGradeCalculation.com
        </a>

        <nav className="navDesktop" aria-label="Primary navigation">
          {NAV.slice(0, 5).map(item => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
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
          {NAV.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="navDivider" />
          <a href="/privacy-policy" onClick={() => setOpen(false)}>Privacy</a>
          <a href="/terms" onClick={() => setOpen(false)}>Terms</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}

      <main className="pageWrap">{children}</main>

      <footer className="footer">
        <a href="/tools">Tools</a>
        <a href="/privacy-policy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact</a>
        <span className="footerCopy">© {new Date().getFullYear()} FinalGradeCalculation.com</span>
      </footer>
    </div>
  );
}
