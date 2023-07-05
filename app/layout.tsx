import { Suspense } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import styles from './layout.module.scss';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jaehwan Kim',
  description: 'Fullstack developer in Canada',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.component}`}>
        <nav className={styles.nav}>
          <Navbar className={`${styles.nav_component}`} />
        </nav>
        <main className={styles.main}>
          <Suspense>
            <div className={`${styles.main_component}`}>{children}</div>
          </Suspense>
        </main>
        <footer className={styles.footer}>
          <Footer className={`${styles.footer_component}`} />
        </footer>
      </body>
    </html>
  );
}
