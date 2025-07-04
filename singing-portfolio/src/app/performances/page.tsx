'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../page.module.css';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

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
  {
    title: "Die Mainacht - Brahms - Trinav Banerjee",
    url: 'https://www.youtube.com/embed/YCuq2tWalDc'
  },
  {
    title: "I say I'll seek her - Oh Fair to See - Trinav Banerjee",
    url: 'https://www.youtube.com/embed/IsIszVGrqH0'
  },
  {
    title: "Teco Si - Leonardo Vinci - Trinav Banerjee",
    url: 'https://www.youtube.com/embed/t4QVYoq2T6I'
  },
];

export default function VideosPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main
      className={`${styles.container} ${fadeIn ? styles.fadeIn : ''}`}
      style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(to right, #ffffff, #f0f8ff)',
        minHeight: '100vh'
      }}
    >
      <Head>
        <title>Videos | Trinav Banerjee</title>
        <meta name="description" content="Watch performances by Trinav Banerjee" />
      </Head>

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
          Performances
        </h1>
        <a
          href="https://www.csmusic.net/artists/details/YXJ0aXN0cyU1QmlkJTVEPTVlYjNkZThmLWFhZTEtNDI5OS1hMDRlLTgwZjlkYzMwYTRjYw=="
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
          Check out my CS Music Profile!
        </a>
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {videos.map((video, index) => {
          const shareUrl = video.url.replace('embed/', 'watch?v=');

          return (
            <div
              key={index}
              style={{
                borderRadius: '16px',
                background: '#fff',
                boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                overflow: 'hidden',
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
              <iframe
                width="100%"
                height="360"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div style={{ padding: '1rem' }}>
                <p style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>{video.title}</p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round /></FacebookShareButton>
                  <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round /></TwitterShareButton>
                  <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32} round /></LinkedinShareButton>
                  <EmailShareButton url={shareUrl} subject={video.title}><EmailIcon size={32} round /></EmailShareButton>
                </div>
              </div>
            </div>
          );
        })}
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

