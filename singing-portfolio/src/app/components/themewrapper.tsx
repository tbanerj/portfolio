'use client';
import { useEffect, useState } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  return (
    <div className={`${isDark ? 'dark-mode' : 'light-mode'} page-enter`}>
      {children}
    </div>
  );
}
