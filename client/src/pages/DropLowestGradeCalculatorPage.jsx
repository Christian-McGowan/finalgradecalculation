import React, { useMemo, useState } from 'react';
import Seo from '../seo/Seo.jsx';

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

export default function DropLowestGradeCalculatorPage() {
  const [scores, setScores] = useState('8/10, 7/10, 9/10, 6/10');
  const [weight, setWeight] = useState(20);

  const parsed = useMemo(() => {
    const parts = scores
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const rows = [];
    for (const p of parts) {
      const m = p.match(/^(\d+(\.\d+)?)\s*\/\s*(\d+(\.\d+)?)$/);
      if (!m) continue;
      const sc = Number(m[1]);
      const mx = Number(m[3]);
      if (!Number.isFinite(sc) || !Number.isFinite(mx) || mx <= 0) continue;
      rows.push({ sc, mx, pct: clamp((sc / mx) * 100, 0, 200) });
    }
    return rows;
  }, [scores]);

  const best = useMemo(() => {
    if (parsed.length < 2) return null;

    const baseAvg = parsed.reduce((sum, r) => sum + r.pct, 0) / parsed.length;

    let bestIdx = -1;
    let bestAvg = -Infinity;

    parsed.forEach((_, idx) => {
      const remaining = parsed.filter((__, i) => i !== idx);
      const avg = remaining.reduce((sum, r) => sum + r.pct, 0) / remaining.length;
      if (avg > bestAvg) {
        bestAvg = avg;
        bestIdx = idx;
      }
    });

    return { baseAvg, bestAvg, bestIdx, dropped: parsed[bestIdx] };
  }, [parsed]);

  return (
    <>
      <Seo />
      <h1>Drop Lowest Grade Calculator</h1>
      <p style={{ maxWidth: 900 }}>
        If your class drops the lowest quiz/homework score, this tool shows which score to drop and how much it improves
        your category average.
      </p>

      <div style={cardStyle}>
        <label style={{ display: 'grid', gap: 6, fontWeight: 900 }}>
          Enter scores as “earned/possible”, separated by commas
          <input value={scores} onChange={e => setScores(e.target.value)} style={inputStyle} />
        </label>

        <div style={{ marginTop: 10, display: 'grid', gap: 6 }}>
          <label style={{ display: 'grid', gap: 6, fontWeight: 900 }}>
            Category weight (%), optional
            <input value={weight} onChange={e => setWeight(e.target.value)} style={inputStyle} inputMode="decimal" />
          </label>
          <div style={{ opacity: 0.85 }}>
            Example input: <code>8/10, 7/10, 9/10, 6/10</code>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          {best ? (
            <div style={resultStyle}>
              <div><strong>Current category average:</strong> {best.baseAvg.toFixed(2)}%</div>
              <div><strong>Best average after dropping one score:</strong> {best.bestAvg.toFixed(2)}%</div>
              <div style={{ marginTop: 6 }}>
                <strong>Drop this score:</strong> {best.dropped.sc}/{best.dropped.mx} ({best.dropped.pct.toFixed(2)}%)
              </div>
              <div style={{ marginTop: 6, opacity: 0.9 }}>
                Category improvement: {(best.bestAvg - best.baseAvg).toFixed(2)} percentage points
                {Number(weight) > 0 ? ` (≈ ${(best.bestAvg - best.baseAvg) * (Number(weight)/100)}`.slice(0, 80) : ''}
              </div>
            </div>
          ) : (
            <div style={resultStyle}>
              Add at least two valid scores in “earned/possible” format to calculate.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const cardStyle = {
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.06)',
  borderRadius: 16,
  padding: 14,
  maxWidth: 900
};

const inputStyle = {
  height: 42,
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.14)',
  background: 'rgba(255,255,255,0.07)',
  color: 'inherit',
  padding: '0 12px',
  outline: 'none'
};

const resultStyle = {
  borderRadius: 12,
  padding: 12,
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(0,0,0,0.15)'
};
