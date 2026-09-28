import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '4rem', maxWidth: '700px' }}
        >
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-number">06</span>
            <h2 className="section-title">Contact<span className="accent-dot" /></h2>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '1.25rem',
            }}
          >
            LET'S BUILD SOMETHING<br />INTELLIGENT.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
            Interested in AI applications, automation or building something useful?
            Let's connect.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1px', maxWidth: '560px' }}
        >
          {[
            {
              icon: <Mail size={16} />,
              label: 'Email',
              value: 'monishkumar2586@gmail.com',
              href: 'mailto:monishkumar2586@gmail.com',
            },
            {
              icon: <LinkedinIcon size={16} />,
              label: 'LinkedIn',
              value: 'monish-kumar-k-655764279',
              href: 'https://www.linkedin.com/in/monish-kumar-k-655764279',
            },
            {
              icon: <GithubIcon size={16} />,
              label: 'GitHub',
              value: 'mkbusiness-mk',
              href: 'https://github.com/mkbusiness-mk',
            },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                background: 'var(--bg-2)',
                textDecoration: 'none',
                color: 'var(--text)',
                transition: 'all 0.2s',
                marginBottom: '0.75rem',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-2)';
              }}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px',
                background: 'var(--accent-dim)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)', flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <p className="label" style={{ marginBottom: '0.15rem' }}>{item.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.value}
                </p>
              </div>
              <ArrowUpRight size={16} color="var(--text-3)" />
            </a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}
        >
          <a href="mailto:monishkumar2586@gmail.com" className="btn btn-primary">
            <Mail size={15} /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/monish-kumar-k-655764279"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
          <a
            href="https://github.com/mkbusiness-mk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <GithubIcon size={15} /> GitHub
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #contact .section-header { margin-bottom: 1.5rem; }
          #contact h3 { word-break: break-word; }
          #contact a[href] {
            padding: 1rem !important;
            gap: 0.75rem !important;
          }
          #contact p[style*="ellipsis"] {
            font-size: 0.78rem !important;
          }
          #contact .btn-group { flex-direction: column; }
          #contact .btn-group .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
