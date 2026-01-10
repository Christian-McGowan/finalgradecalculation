import React from 'react';
import Seo from '../seo/Seo.jsx';

const tools = [
  { href: '/final-grade-calculator', title: 'Final Grade Calculator', desc: 'Calculate what score you need on the final to reach a target grade.' },
  { href: '/what-score-do-i-need-on-my-final-exam', title: 'What Score Do I Need on My Final Exam?', desc: 'Ultra-focused calculator for the exact “score needed” question.' },
  { href: '/can-i-still-pass-this-class', title: 'Can I Still Pass This Class?', desc: 'Clear yes/no feasibility checker with required score.' },
  { href: '/drop-lowest-grade-calculator', title: 'Drop Lowest Grade Calculator', desc: 'Optimize which quiz/homework score to drop and see the impact.' },
  { href: '/weighted-grade-calculator', title: 'Weighted Grade Calculator', desc: 'Match your syllabus with weighted categories.' },
  { href: '/grade-planner', title: 'Class Grade Planner', desc: 'Track categories, assignments, and your running grade.' }
];

export default function ToolsPage() {
  return (
    <>
      <Seo />
      <h1>Free Grade Tools</h1>
      <p style={{ maxWidth: 900 }}>
        These tools help you answer common syllabus questions quickly: what you need on your final, whether you can still
        pass, how weighted categories work, and how dropping the lowest score affects your grade.
      </p>

      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {tools.map(t => (
          <a
            key={t.href}
            href={t.href}
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 16,
              padding: 14
            }}
          >
            <div style={{ fontWeight: 950, marginBottom: 6 }}>{t.title}</div>
            <div style={{ opacity: 0.85 }}>{t.desc}</div>
          </a>
        ))}
      </div>
    </>
  );
}
