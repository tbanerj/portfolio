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
    fetch('/blogs.json') // We'll serve the JSON statically
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className={styles.container} style={{ padding: '4rem 2rem' }}>
      <h1 className={styles.title}>📝 Blog</h1>
      <div>
        {posts.map(post => (
          <div key={post.id} style={{ marginBottom: '2rem' }}>
            <h2>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p style={{ fontWeight: 500, color: 'gray' }}>{post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>Read more →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
