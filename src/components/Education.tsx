import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    level: 'Undergraduate',
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'Erode Sengunthar Engineering College',
    timeline: 'Expected Graduation — 2028',
    score: null,
  },
  {
    level: 'Higher Secondary',
    degree: '12th Standard (HSC)',
    institution: 'Bishop Ubagaraswamy Higher Secondary School',
    timeline: 'Passed Out 2024',
    score: '68.83%',
  },
  {
    level: 'Secondary School',
    degree: '10th Standard (SSLC)',
    institution: 'Bishop Ubagaraswamy Higher Secondary School',
    timeline: 'Passed Out 2022',
    score: '67.20%',
  },
];

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
          style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '0' }}
        >
          {educationData.map((item, index) => {
            const isLast = index === educationData.length - 1;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
                className="edu-card"
              >
                {/* Timeline line & icon */}
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
                  {!isLast && (
                    <div style={{ width: '1px', flex: 1, background: 'var(--border)', marginTop: '8px', minHeight: '60px' }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: isLast ? '0' : '2rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="label" style={{ color: 'var(--text-3)' }}>
                      {item.level}
                    </span>
                    {item.score && (
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '20px',
                        background: 'var(--accent-dim)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(var(--accent-rgb, 100, 100, 255), 0.2)',
                      }}>
                        Score: {item.score}
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
                      fontWeight: 700,
                      color: 'var(--text)',
                      marginBottom: '0.3rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.degree}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginBottom: '0.85rem' }}>
                    {item.institution}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={13} color="var(--text-3)" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>
                      {item.timeline}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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
