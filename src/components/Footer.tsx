import React from 'react';

const Footer: React.FC = () => (
  <footer
    style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 0',
    }}
  >
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {/* Left */}
      <div>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.04em',
            color: 'var(--text)',
            marginBottom: '0.3rem',
          }}
        >
          MONISH KUMAR K
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
          AI Developer · AI Automation · LLM Applications
        </p>
      </div>

      {/* Right */}
      <p style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
        © 2026 Monish Kumar K
      </p>
    </div>
  </footer>
);

export default Footer;
