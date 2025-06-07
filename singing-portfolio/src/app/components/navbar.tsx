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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className={`${styles.right} ${menuOpen ? styles.open : ''}`}>
        <Link href="/videos">
          <span className={pathname === '/videos' ? styles.active : ''}>Videos</span>
        </Link>
        <Link href="/blog">
          <span className={pathname === '/blog' ? styles.active : ''}>Blog</span>
        </Link>
        <a href="mailto:trinavbanerjee7@gmail.com" className={styles.rightLink}>
          Contact
        </a>        
      </div>
    </nav>
  );
}
