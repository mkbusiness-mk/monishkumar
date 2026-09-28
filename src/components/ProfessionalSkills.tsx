import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { professionalSkills } from '../data/skills';

const ProfessionalSkills: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-i-work" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">How I Work<span className="accent-dot" /></h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {professionalSkills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              style={{
                background: 'var(--bg-2)',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-2)')}
            >
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '0.875rem', color: 'var(--text-2)', fontWeight: 400 }}>
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #how-i-work .container > div {
            grid-template-columns: 1fr !important;
          }
          #how-i-work .container > div > div {
            padding: 1.25rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProfessionalSkills;
