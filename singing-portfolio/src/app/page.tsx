'use client';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Hey, I'm Trinav</h1>
        <p className={styles.subtitle}>
          I’m a passionate vocalist and aspiring computer scientist, blending music and technology to create meaningful experiences.
        </p>
        <p className={styles.description}>
          Whether I'm performing classical arias or building full-stack apps, I'm driven by creativity, emotion, and innovation. My journey weaves together storytelling through music and solving real-world problems through code. From singing in three languages to designing AI-powered music tools, I’m always searching for ways to bridge art and tech in human-centered ways.
        </p>
        <div className={styles.metrics}>
          <div><strong>10+</strong> Performances</div>
          <div><strong>3</strong> Languages</div>
          <div><strong>∞</strong> Passion</div>
        </div>
        <div className={styles.links}>
          <a href="/performances">🎤 Singing Videos</a>
          <a href="/projects">💻 Coding Projects</a>
        </div>
      </div>
      <div className={styles.imageSection}>
        <Image
          src="/performance.jpeg"
          alt="Trinav Performing"
          width={400}
          height={533}
          className={styles.image}
        />
      </div>
    </main>
  );
}
