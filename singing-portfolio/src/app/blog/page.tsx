'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../page.module.css';

export default function BlogPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className={`${styles.container} ${fadeIn ? styles.fadeIn : ''}`} style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <Head>
        <title>Blog | Trinav Banerjee</title>
        <meta name="description" content="Blog updates by Trinav Banerjee coming soon" />
      </Head>
      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className={styles.title} style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>📝 Blog</h1>
        <p style={{ fontSize: '1.25rem', fontWeight: 500, color: 'gray' }}>Coming soon — stay tuned for thoughts, stories, and reflections!</p>
      </section>
      <style jsx>{`
        .${styles.fadeIn} {
          animation: fadeSlideIn 0.6s ease forwards;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
