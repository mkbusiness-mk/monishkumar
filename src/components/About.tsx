import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-number">00</span>
          <h2 className="section-title">About<span className="accent-dot" /></h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              I'm an Artificial Intelligence and Data Science engineering student
              interested in building practical AI applications and intelligent
              automation systems.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.8 }}>
              My focus is on Large Language Models, Retrieval-Augmented Generation,
              AI automation and workflow-driven applications. I enjoy transforming
              ideas into useful technical products and continuously experimenting
              with emerging AI technologies.
            </p>
          </motion.div>

          {/* Right — image & education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--bg-2)',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Monish Kumar K"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(15%) contrast(110%)',
                  transition: 'filter 0.3s ease, transform 0.5s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%) contrast(100%)';
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(15%) contrast(110%)';
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
            </div>

            <div
              style={{
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.75rem',
                background: 'var(--bg-2)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '6px',
                  background: 'var(--accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <GraduationCap size={16} color="var(--accent)" />
                </div>
                <span className="label">Education</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: '0.35rem',
                lineHeight: 1.3,
              }}>
                B.Tech — Artificial Intelligence &amp; Data Science
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginBottom: '0.75rem' }}>
                Erode Sengunthar Engineering College
              </p>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                  background: 'var(--accent-dim)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                }}
              >
                Expected 2028
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
