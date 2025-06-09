'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

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
        marginBottom: '2rem'
      }}>
        📞 Contact Me
      </h1>

      <div
        className="popUp"
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          padding: '2.5rem'
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem', lineHeight: '2' }}>
          <li><strong>Email:</strong> <a href="mailto:trinavbanerjee7@gmail.com">trinavbanerjee7@gmail.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+14252159857">(425) 215-9857</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/trinavbanerjee" target="_blank" rel="noopener noreferrer">linkedin.com/in/trinavbanerjee</a></li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/triinav" target="_blank" rel="noopener noreferrer">@triinav</a></li>
        </ul>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{
            fontSize: '1rem',
            fontWeight: '500',
            color: '#0070f3',
            textDecoration: 'none',
            border: '1px solid #0070f3',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease-in-out'
          }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
