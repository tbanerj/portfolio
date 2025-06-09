import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const posts: BlogPost[] = JSON.parse(fileContent);
  return posts.map(post => ({ id: post.id }));
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const posts: BlogPost[] = JSON.parse(fileContent);
  const post = posts.find(p => p.id === params.id);

  if (!post) return notFound();

  return (
    <main style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(to right, #ffffff, #f0f8ff)',
      minHeight: '100vh'
    }}>
      <div
        className="popUp"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          background: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          borderRadius: '16px'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>{post.title}</h1>
        <p style={{ fontWeight: 500, color: 'gray', marginBottom: '2rem' }}>{post.date}</p>
        <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
          {post.content}
        </div>
        <div style={{ marginTop: '3rem' }}>
          <Link href="/blog" style={{
            fontSize: '1rem',
            fontWeight: '500',
            color: '#0070f3',
            textDecoration: 'none',
            border: '1px solid #0070f3',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease-in-out'
          }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
