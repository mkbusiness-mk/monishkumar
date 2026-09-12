import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">Education<span className="accent-dot" /></h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '640px' }}
        >
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
            }}
            className="edu-card"
          >
            {/* Timeline line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--accent-dim)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <GraduationCap size={16} color="var(--accent)" />
              </div>
              <div style={{ width: '1px', flex: 1, background: 'var(--border)', marginTop: '8px', minHeight: '80px' }} />
            </div>

            {/* Content */}
            <div style={{ paddingBottom: '2rem' }}>
              <p className="label" style={{ marginBottom: '0.75rem', color: 'var(--text-3)' }}>
                Undergraduate
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3,
                }}
              >
                B.Tech — Artificial Intelligence &amp; Data Science
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginBottom: '1.25rem' }}>
                Erode Sengunthar Engineering College
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={13} color="var(--text-3)" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>
                  Expected Graduation — 2028
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .edu-card { gap: 1rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;
