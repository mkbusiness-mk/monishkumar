import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'var(--nav-h)',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
          opacity: 0.4,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '860px' }}
        >
          {/* Label */}
          <motion.p variants={itemVariants} className="label" style={{ marginBottom: '2.5rem' }}>
            AI Developer • Agentic AI • Full-Stack & MERN • AI Automation
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="display"
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 8rem)',
              color: 'transparent',
              backgroundImage: 'linear-gradient(170deg, var(--text) 30%, #888 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              marginBottom: '1.5rem',
              lineHeight: 0.96,
            }}
          >
            MONISH<br />KUMAR K<span className="accent-dot" />
          </motion.h1>

          {/* Supporting headline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-2)',
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: '600px',
              marginBottom: '1rem',
            }}
          >
            Building intelligent systems, LLM applications &amp; AI-powered automation.
          </motion.p>

          {/* Short description */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-3)',
              lineHeight: 1.65,
              maxWidth: '520px',
              marginBottom: '3rem',
            }}
          >
            Engineering student focused on building practical AI applications,
            LLM-powered systems and intelligent automation workflows.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <a
              className="btn btn-ghost"
              href="https://github.com/mkbusiness-mk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/monish-kumar-k-655764279"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="label" style={{ fontSize: '0.55rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} color="var(--text-3)" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
