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
      description: 'This Next.js app showcases my singing performances and blog, styled with animations.',
      link: 'https://github.com/tbanerj/portfolio'
    },
    {
      title: 'Python GPA Calculator',
      description: 'A Python script that calculates GPA based on user input, featuring a simple web GUI.',
      link: 'https://github.com/tbanerj/GPACALC'
    },
    {
      title: 'AI Tic-Tac-Toe',
      description: 'A Python-based Tic-Tac-Toe game using basic AI algorithms to challenge the player.',
      link: 'https://github.com/tbanerj/cs50aiprojects'
    },
    {
      title: 'Jackson High School NHS Website',
      description: 'A static site for JHS NHS built with HTML, CSS, and Next.js for clean presentation.',
      link: 'https://github.com/AbhGow07/NHS.Website'
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
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          textAlign: 'center'
        }}>
          💻 Projects
        </h1>
        <a
          href="https://github.com/tbanerj"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(135deg, #4a90e2, #0070f3)',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0, 112, 243, 0.2)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 112, 243, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 112, 243, 0.2)';
          }}
        >
          Visit My GitHub Profile!
        </a>
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {projects.map((proj, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
              transform: 'translateY(20px)',
              opacity: 0,
              animation: `fadeSlideIn 0.6s ease forwards ${index * 0.15}s`,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)';
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

      <style jsx>{`
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
