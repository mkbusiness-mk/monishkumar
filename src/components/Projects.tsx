import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const ProjectCard: React.FC<{ project: Project; index: number; inView: boolean }> = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 0',
        display: 'grid',
        gridTemplateColumns: '120px 1fr auto',
        gap: '2rem',
        alignItems: 'start',
        cursor: 'default',
        transition: 'all 0.2s',
      }}
      className="project-card-row"
    >
      {/* Number */}
      <div>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: 800,
            color: hovered ? 'var(--accent)' : 'var(--text-3)',
            lineHeight: 1,
            transition: 'color 0.25s',
            display: 'block',
          }}
        >
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: 'var(--text)',
            marginBottom: '0.25rem',
          }}
        >
          {project.title}
        </h3>
        <p className="label" style={{ color: 'var(--text-3)', marginBottom: '1rem' }}>
          {project.subtitle}
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.highlights.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'var(--text-3)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '0.2rem 0.6rem',
                background: 'var(--bg-2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Link */}
      <div style={{ paddingTop: '0.25rem' }}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ fontSize: '0.75rem' }}
          >
            View Project <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Projects<span className="accent-dot" /></h2>
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card-row {
            grid-template-columns: 60px 1fr !important;
            gap: 1rem !important;
          }
          .project-card-row > div:last-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .project-card-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
