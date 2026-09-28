import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skillCategories, allSkills } from '../data/skills';

interface ConnectionLine {
  id: string;
  x1: number; y1: number;
  x2: number; y2: number;
  pathD: string;
}

const Skills: React.FC = () => {
  // null = nothing hovered (idle/dim state)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [lines, setLines] = useState<ConnectionLine[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const catRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skillRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const hoveredCategory = hoveredIdx !== null ? skillCategories[hoveredIdx] : null;

  // ─── Compute bezier paths from category dot → each matching skill card ───
  const computeLines = useCallback((catIdx: number) => {
    if (!containerRef.current) return [];
    const containerRect = containerRef.current.getBoundingClientRect();
    const catEl = catRefs.current[catIdx];
    if (!catEl) return [];

    const dotEl = catEl.querySelector('.cat-anchor-dot') as HTMLElement | null;
    const anchor = dotEl ?? catEl;
    const anchorRect = anchor.getBoundingClientRect();
    const x1 = anchorRect.left + anchorRect.width / 2 - containerRect.left;
    const y1 = anchorRect.top  + anchorRect.height / 2 - containerRect.top;

    const cat = skillCategories[catIdx];
    const newLines: ConnectionLine[] = [];

    allSkills.forEach((skill) => {
      if (!skill.categories.includes(cat.id)) return;
      const el = skillRefs.current[skill.id];
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x2 = r.left - containerRect.left;
      const y2 = r.top + r.height / 2 - containerRect.top;

      // Cubic bezier: horizontal drag then converge
      const cpOffset = Math.min(Math.abs(x2 - x1) * 0.55, 200);
      const cx1 = x1 + cpOffset;
      const cy1 = y1;
      const cx2 = x2 - cpOffset * 0.4;
      const cy2 = y2;
      const pathD = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

      newLines.push({ id: skill.id, x1, y1, x2, y2, pathD });
    });
    return newLines;
  }, []);

  // Update lines whenever hovered category changes
  useEffect(() => {
    if (hoveredIdx === null) {
      setLines([]);
      return;
    }
    // Small rAF delay ensures DOM positions are correct after any CSS transition
    const raf = requestAnimationFrame(() => {
      setLines(computeLines(hoveredIdx));
    });
    return () => cancelAnimationFrame(raf);
  }, [hoveredIdx, computeLines]);

  // Recalculate on resize
  useEffect(() => {
    const onResize = () => {
      if (hoveredIdx !== null) setLines(computeLines(hoveredIdx));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [hoveredIdx, computeLines]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container" style={{ position: 'relative' }}>

        {/* ── Header ── */}
        <motion.div
          className="skills-header-row"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="skills-header-left">
            <span className="section-number">04</span>
            <h2 className="section-title">SKILLS<span className="accent-dot" /></h2>
          </div>
          <span className="tech-count-badge">{allSkills.length}&nbsp;TECHNOLOGIES</span>
        </motion.div>

        {/* ── Matrix wrapper ── */}
        <div
          ref={containerRef}
          className="skills-matrix-wrapper"
          // Clear hover when mouse leaves the whole matrix area
          onMouseLeave={() => setHoveredIdx(null)}
        >

          {/* SVG overlay for bezier lines */}
          <svg
            className="bezier-svg-overlay"
            aria-hidden="true"
          >
            <defs>
              {/* Glow filter */}
              <filter id="sk-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradient along the line */}
              <linearGradient id="sk-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#c8ff00" stopOpacity="0.9" />
                <stop offset="60%"  stopColor="#c8ff00" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#c8ff00" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            <AnimatePresence mode="sync">
              {lines.map((line, i) => (
                <motion.path
                  key={line.id}
                  d={line.pathD}
                  fill="none"
                  stroke="url(#sk-line-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#sk-glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{
                    pathLength: { duration: 0.4, delay: i * 0.04, ease: 'easeOut' },
                    opacity:    { duration: 0.2, delay: i * 0.04 },
                  }}
                />
              ))}
            </AnimatePresence>
          </svg>

          {/* ── LEFT: Category list ── */}
          <div className="cat-column">
            {skillCategories.map((cat, idx) => {
              const isActive = hoveredIdx === idx;
              const isIdle   = hoveredIdx === null;

              return (
                <div
                  key={cat.id}
                  ref={(el) => { catRefs.current[idx] = el; }}
                  className={`cat-row${isActive ? ' active' : ''}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                >
                  <div className="cat-row-content">
                    <span className={`cat-index${isActive ? ' accent' : ''}`}>{cat.number}</span>
                    <span
                      className="cat-title-text"
                      style={{
                        color: isActive
                          ? 'var(--text)'
                          : isIdle
                            ? 'var(--text-2)'
                            : 'var(--text-3)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      {cat.category}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className={`cat-count-num${isActive ? ' accent' : ''}`}>
                      {cat.count.toString().padStart(2, '0')}
                    </span>
                    {/* ← this dot is the bezier anchor */}
                    <span className={`cat-anchor-dot${isActive ? ' lit' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── RIGHT: Technology tag matrix ── */}
          <div className="matrix-column">
            <div className="skills-flex-matrix">
              {allSkills.map((skill) => {
                const isConnected = hoveredCategory
                  ? skill.categories.includes(hoveredCategory.id)
                  : false;
                const isIdle = hoveredIdx === null;

                return (
                  <div
                    key={skill.id}
                    ref={(el) => { skillRefs.current[skill.id] = el; }}
                    className={`skill-tag-box${
                      isConnected ? ' active-tag'
                      : isIdle    ? ' idle-tag'
                      :             ' dim-tag'
                    }`}
                  >
                    <span className="skill-tag-text">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>{/* end matrix-wrapper */}

        {/* Decorative accents */}
        <div aria-hidden="true" style={{ pointerEvents: 'none' }}>
          <svg className="floating-star" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
          </svg>
          <div className="floating-torus" />
        </div>

      </div>

      {/* ── Scoped Styles ── */}
      <style>{`
        /* Header */
        .skills-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }
        .skills-header-left {
          display: flex;
          align-items: baseline;
          gap: 1.25rem;
        }
        .tech-count-badge {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-3);
          text-transform: uppercase;
        }

        /* Matrix wrapper */
        .skills-matrix-wrapper {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 3.5rem;
          align-items: start;
          min-height: 460px;
          position: relative;
        }

        /* SVG overlay */
        .bezier-svg-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 10;
          overflow: visible;
        }

        /* Category column */
        .cat-column {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
          position: relative;
          z-index: 20;
        }

        .cat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 1rem;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: background 0.2s ease;
          background: transparent;
          user-select: none;
        }
        .cat-row:hover   { background: rgba(255,255,255,0.025); }
        .cat-row.active  { background: rgba(255,255,255,0.045); }

        .cat-row-content {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .cat-index {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-3);
          letter-spacing: 0.05em;
          transition: color 0.2s;
          min-width: 1.6rem;
        }
        .cat-index.accent { color: var(--accent); }

        .cat-title-text {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .cat-count-num {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-3);
          transition: color 0.2s;
        }
        .cat-count-num.accent { color: var(--accent); }

        .cat-anchor-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-3);
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .cat-anchor-dot.lit {
          background: var(--accent);
          box-shadow: 0 0 10px rgba(200,255,0,0.9), 0 0 20px rgba(200,255,0,0.5);
          transform: scale(1.4);
        }

        /* Skill tag matrix */
        .matrix-column {
          position: relative;
          z-index: 20;
          padding-top: 0.5rem;
        }
        .skills-flex-matrix {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          align-content: flex-start;
        }

        .skill-tag-box {
          padding: 0.6rem 1rem;
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          transition:
            background  0.25s cubic-bezier(0.16,1,0.3,1),
            border-color 0.25s cubic-bezier(0.16,1,0.3,1),
            color        0.25s cubic-bezier(0.16,1,0.3,1),
            box-shadow   0.25s cubic-bezier(0.16,1,0.3,1),
            transform    0.25s cubic-bezier(0.16,1,0.3,1);
          user-select: none;
          will-change: transform;
        }

        /* Default idle: neutral visible */
        .skill-tag-box.idle-tag {
          background: rgba(20,20,20,0.6);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.45);
        }

        /* When a category is hovered but this card is NOT in it */
        .skill-tag-box.dim-tag {
          background: rgba(12,12,12,0.5);
          border: 1px solid rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.16);
        }

        /* Connected / active — subtle highlight, not overpowering */
        .skill-tag-box.active-tag {
          background: rgba(200,255,0,0.04);
          border: 1px solid rgba(200,255,0,0.5);
          color: rgba(255,255,255,0.92);
          box-shadow: 0 0 10px rgba(200,255,0,0.1);
          transform: translateY(-1px);
        }

        /* Floating accents */
        .floating-star {
          position: absolute;
          top: 12px; right: 40px;
          width: 30px; height: 30px;
          color: rgba(200,255,0,0.22);
          filter: drop-shadow(0 0 8px rgba(200,255,0,0.35));
          animation: sk-spin 14s linear infinite;
        }
        .floating-torus {
          position: absolute;
          bottom: 16px; right: 16px;
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1.5px dashed rgba(255,255,255,0.1);
          animation: sk-spin 22s linear infinite reverse;
        }
        @keyframes sk-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 960px) {
          .skills-matrix-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
            min-height: auto;
          }
          .bezier-svg-overlay { display: none; }
          .skills-flex-matrix { gap: 0.5rem; }
          .skill-tag-box { padding: 0.5rem 0.8rem; font-size: 0.72rem; }
        }
        @media (max-width: 480px) {
          .skills-header-row { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
          .cat-title-text { font-size: 0.92rem; }
          .cat-row { padding: 1rem 0.75rem; }
          .skill-tag-box { padding: 0.45rem 0.7rem; font-size: 0.68rem; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
