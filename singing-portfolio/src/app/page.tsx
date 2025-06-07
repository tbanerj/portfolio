'use client';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Hey, I'm Trinav</h1>
        <p className={styles.subtitle}>
          I’m a vocalist exploring sound, emotion, and storytelling.
        </p>
        <div className={styles.metrics}>
          <div><strong>10+</strong> Performances</div>
          <div><strong>3</strong> Languages</div>
          <div><strong>∞</strong> Passion</div>
        </div>
        <div className={styles.links}>
          <a href="/videos">🎤 Singing Videos</a>
        </div>
      </div>
      <div className={styles.imageSection}>
        <Image src="/performance.jpeg" alt="Trinav Performing" width={400} height={533} className={styles.image} />
      </div>
    </main>
  );
}
