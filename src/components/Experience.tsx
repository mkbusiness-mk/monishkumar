import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Experience<span className="accent-dot" /></h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderTop: '1px solid var(--border)',
            padding: '2.5rem 0',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="experience-card"
        >
          {/* Icon */}
          <div style={{
            width: '48px', height: '48px', borderRadius: '8px',
            background: 'var(--bg-2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid var(--border)',
          }}>
            <Briefcase size={20} color="var(--text-2)" />
          </div>

          {/* Content */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '0.25rem',
              }}
            >
              DATA SCIENCE INTERN — TECH VEDHU
            </h3>
            <p className="label" style={{ color: 'var(--text-3)', marginBottom: '1rem' }}>
              Internship Training &nbsp;|&nbsp; 18 Jun 2026 – 04 Jul 2026
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '700px' }}>
              Completed internship training in Data Science, gaining practical exposure and experience in a professional learning environment.
            </p>
          </div>
        </motion.div>
        
        {/* Bottom border */}
        <div style={{ borderTop: '1px solid var(--border)' }} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .experience-card {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
