import React, { useState } from 'react';
import Seo from '../seo/Seo.jsx';

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

export default function CanIStillPassThisClassPage() {
  const [current, setCurrent] = useState(62);
  const [remainingWeight, setRemainingWeight] = useState(30);
  const [passing, setPassing] = useState(70);

  const cur = Number(current);
  const w = Number(remainingWeight) / 100;
  const pass = Number(passing);

  let msg = 'Enter values to calculate.';
  let tone = 'muted';

  if (Number.isFinite(cur) && Number.isFinite(w) && Number.isFinite(pass) && w > 0 && w <= 1) {
    const needed = (pass - cur * (1 - w)) / w;

    if (needed <= 0) {
      tone = 'success';
      msg = `Yes — based on these numbers, you can still pass. You need ${needed.toFixed(2)}% or higher (effectively 0%).`;
    } else if (needed > 100) {
      tone = 'danger';
      msg = `It may be impossible. You would need ${needed.toFixed(2)}% on remaining work, which is above 100% unless extra credit exists.`;
    } else {
      tone = 'ok';
      msg = `Yes — you can still pass. You need at least ${needed.toFixed(2)}% on the remaining ${clamp(remainingWeight, 1, 100)}% of the course.`;
    }
  }

  return (
    <>
      <Seo />
      <h1>Can I Still Pass This Class?</h1>
      <p style={{ maxWidth: 900 }}>
        This tool checks whether it’s mathematically possible to pass based on your current grade, the weight remaining
        (final exam + remaining assignments), and the passing threshold.
      </p>

      <div style={{
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 16,
        padding: 14,
        maxWidth: 900
      }}>
        <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <label style={{ display: 'grid', gap: 6, fontWeight: 800 }}>
            Current grade (%)
            <input value={current} onChange={e => setCurrent(e.target.value)} style={inputStyle} inputMode="decimal" />
          </label>

          <label style={{ display: 'grid', gap: 6, fontWeight: 800 }}>
            Remaining weight (%)
            <input value={remainingWeight} onChange={e => setRemainingWeight(e.target.value)} style={inputStyle} inputMode="decimal" />
          </label>

          <label style={{ display: 'grid', gap: 6, fontWeight: 800 }}>
            Passing threshold (%)
            <input value={passing} onChange={e => setPassing(e.target.value)} style={inputStyle} inputMode="decimal" />
          </label>
        </div>

        <div style={{ marginTop: 12, padding: 10, borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)' }}>
          <strong style={{ color: tone === 'danger' ? '#ffd2d2' : tone === 'success' ? '#d7ffe6' : '#e8ecff' }}>{msg}</strong>
        </div>

        <p style={{ marginTop: 10, opacity: 0.85 }}>
          Tip: “Remaining weight” can include your final exam plus any remaining assignments if your teacher’s gradebook
          hasn’t fully updated.
        </p>
      </div>
    </>
  );
}

const inputStyle = {
  height: 42,
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.14)',
  background: 'rgba(255,255,255,0.07)',
  color: 'inherit',
  padding: '0 12px',
  outline: 'none'
};
