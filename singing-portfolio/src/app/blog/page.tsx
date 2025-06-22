'use client';
import { useEffect, useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className={styles.container} style={{ padding: '5rem 2rem', background: 'linear-gradient(to right, #ffffff, #f0f8ff)', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>Blog</h1>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              borderRadius: '16px',
              padding: '2rem',
              background: '#fff',
              boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)';
            }}
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p style={{ fontWeight: 500, color: 'gray', marginBottom: '1rem' }}>{post.date}</p>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#333' }}>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} style={{
              fontWeight: 500,
              color: '#0070f3',
              textDecoration: 'none',
              fontSize: '0.95rem',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.3s ease'
            }}
              onMouseEnter={e => (e.currentTarget.style.borderBottom = '1px solid #0070f3')}
              onMouseLeave={e => (e.currentTarget.style.borderBottom = '1px solid transparent')}
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
