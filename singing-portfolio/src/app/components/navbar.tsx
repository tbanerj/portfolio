'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarTop}>
        <Link href="/" className={styles.logo}>
          Trinav Banerjee
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <div className={`${styles.right} ${menuOpen ? styles.open : ''}`}>
        <Link href="/performances">
          <span className={pathname === '/performances' ? styles.active : ''}>Performances</span>
        </Link>
        <Link href="/projects">
          <span className={pathname === '/projects' ? styles.active : ''}>Projects</span>
        </Link>
        <Link href="/blog">
          <span className={pathname === '/blog' ? styles.active : ''}>Blog</span>
        </Link>
        <Link href="/contact">
          <span className={pathname === '/contact' ? styles.active : ''}>Contact</span>
        </Link>
      </div>
    </nav>
  );
}
