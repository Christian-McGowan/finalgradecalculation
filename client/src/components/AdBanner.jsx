import React from 'react';

export default function AdBanner({ slot, style }) {
  // Set this to true later when you want visible placeholders again
  const showPlaceholders = false;

  if (!showPlaceholders) {
    // Keep the exact layout spacing with no visible content
    return (
      <div
        style={{
          width: '100%',
          height: style?.minHeight || style?.height || '100%',
          ...style,
          border: 'none',
          background: 'transparent',
          padding: 0,
          display: 'block'
        }}
        aria-hidden="true"
      />
    );
  }

  // Visible placeholder version (kept for testing)
  return (
    <div
      className="ad-banner"
      style={{
        border: '1px dashed var(--ad-border)',
        borderRadius: 10,
        padding: 8,
        textAlign: 'center',
        fontSize: 12,
        opacity: 0.8,
        ...style
      }}
    >
      <span>Ad space – slot: {slot}</span>
    </div>
  );
}
