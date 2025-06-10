import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

// Generate static routes for blog posts
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const posts: BlogPost[] = JSON.parse(fileContent);

  return posts.map((post) => ({ id: post.id }));
}

// Fix for Next.js 15 async dynamic API access
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; // ✅ FIXED: Await `params`

  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const posts: BlogPost[] = JSON.parse(fileContent);

  const post = posts.find((p) => p.id === id);

  if (!post) return notFound();

  return (
    <main style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(to right, #ffffff, #f0f8ff)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        background: 'white',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        borderRadius: '16px'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>{post.title}</h1>
        <p style={{ fontWeight: 500, color: 'gray', marginBottom: '2rem' }}>{post.date}</p>
        <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
          {post.content}
        </div>
        <div style={{ marginTop: '3rem' }}>
          <Link href="/blog" style={{
            fontSize: '1rem',
            fontWeight: 500,
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
    