import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Skills<span className="accent-dot" /></h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                padding: '2rem',
                borderRight: i < skillCategories.length - 1 ? '1px solid var(--border)' : 'none',
                background: 'var(--bg-2)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-2)')}
            >
              {/* Category label */}
              <p className="label" style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>
                {cat.category}
              </p>

              {/* Skills list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {cat.skills.map(skill => (
                  <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{
                      width: '3px', height: '3px', borderRadius: '50%',
                      background: 'var(--text-3)', flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.4 }}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .skills-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .skills-grid > div:last-child { border-bottom: none; }
        }
        @media (max-width: 500px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
