'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../page.module.css';

const videos = [
  {
    title: 'Chanson Triste - Henri Duparc',
    url: 'https://www.youtube.com/embed/yaokUFm60bk'
  },
  {
    title: 'A Young Man’s Exhortation – Gerald Finzi',
    url: 'https://www.youtube.com/embed/t9Cq-ZaVe3s'
  },
  {
    title: 'La Rondinella Amante - Antonio Vivaldi',
    url: 'https://www.youtube.com/embed/bUWlE_nQ5iI'
  },
  {
    title: "There's A World - Next To Normal - Tom Kitt",
    url: 'https://www.youtube.com/embed/r5dg_V5uB7I'
  },
  {
    title: "Grand Knowing You - She Loves Me - Jerry Bock",
    url: 'https://www.youtube.com/embed/8LYXdRX3GYE'
  },
  {
    title: "Good Kid - The Lightening Thief - Rob Rokicki",
    url: 'https://www.youtube.com/embed/UDJJbho1Uz8'
  },
];

export default function VideosPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className={`${styles.container} ${fadeIn ? styles.fadeIn : ''}`} style={{ padding: '4rem 2rem' }}>
      <Head>
        <title>Videos | Trinav Banerjee</title>
        <meta name="description" content="Watch performances by Trinav Banerjee" />
      </Head>
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className={styles.title} style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>🎤 Singing Performances</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          justifyContent: 'center'
        }}>
          {videos.map((video, index) => (
            <div
              key={index}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                background: '#fff',
                transform: 'translateY(20px)',
                opacity: 0,
                animation: `fadeSlideIn 0.6s ease forwards ${index * 0.15}s`
              }}
            >
              <iframe
                width="100%"
                height="230"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p style={{ padding: '1rem', margin: 0, fontWeight: 500 }}>{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animation keyframes */}
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
