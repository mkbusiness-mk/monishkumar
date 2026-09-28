import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FocusBlock {
  number: string;
  title: string;
  description: string;
}

const blocks: FocusBlock[] = [
  {
    number: '01',
    title: 'LLM Applications',
    description: 'Building applications around Large Language Models.',
  },
  {
    number: '02',
    title: 'AI Automation',
    description: 'Designing intelligent workflows that reduce repetitive work.',
  },
  {
    number: '03',
    title: 'Retrieval & Memory',
    description:
      'Exploring RAG, CAG and MAG approaches for context-aware AI systems.',
  },
  {
    number: '04',
    title: 'Practical AI Products',
    description:
      'Turning AI concepts into useful applications and workflows.',
  },
];

const Focus: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="focus" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">What I Build<span className="accent-dot" /></h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          className="focus-grid"
        >
          {blocks.map((block, i) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHovered(block.number)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '2.5rem 1.75rem',
                borderRight: i < blocks.length - 1 ? '1px solid var(--border)' : 'none',
                background: hovered === block.number ? 'var(--bg-3)' : 'var(--bg-2)',
                transition: 'background 0.25s',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: hovered === block.number ? 'var(--accent)' : 'var(--text-3)',
                  transition: 'color 0.25s',
                }}
              >
                {block.number}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.3,
                  }}
                >
                  {block.title}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .focus-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .focus-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
          }
          .focus-grid > div:nth-child(odd) { border-right: 1px solid var(--border) !important; }
          .focus-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 500px) {
          .focus-grid { grid-template-columns: 1fr !important; }
          .focus-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .focus-grid > div:last-child { border-bottom: none; }
          .focus-grid > div { padding: 1.75rem 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Focus;
