'use client';
import React, { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const projects = [
    {
      title: 'Singing Portfolio Website',
      description: 'This Next.js app showcases my singing performances and blog, styled with animations and deployed via Docker.',
      link: 'https://github.com/trinavbanerjee/singing-portfolio'
    },
  ];

  return (
    <main
      className={fadeIn ? 'page-enter' : ''}
      style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(to right, #ffffff, #f0f8ff)',
        minHeight: '100vh'
      }}
    >
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '2.5rem'
      }}>
        💻 Projects
      </h1>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gap: '2rem'
      }}>
        {projects.map((proj, index) => (
          <div
            key={index}
            className="popUp"
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{proj.title}</h2>
            <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1rem' }}>{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0070f3',
                fontWeight: '500',
                textDecoration: 'none',
                border: '1px solid #0070f3',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              View on GitHub ↗
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
