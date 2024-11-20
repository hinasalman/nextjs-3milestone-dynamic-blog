import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hina Salman&apos;s Blog</h1> {/* Fix: Use &apos; for apostrophe */}
      </header>
      <main className={styles.main}>
        <ul className={styles.postsList}>
          <li className={styles.postItem}>
            <Link href="/posts/1" className={styles.link}>
              First Post
            </Link>
          </li>
          <li className={styles.postItem}>
            <Link href="/posts/2" className={styles.link}>
              Second Post
            </Link>
          </li>
          <li className={styles.postItem}>
            <Link href="/posts/3" className={styles.link}>
              Third Post
            </Link>
          </li>
        </ul>
      </main>
      <footer className={styles.footer}>
        <p>&copy;2024 Hina Salman. All rights reserved</p>
      </footer>
    </div>
  );
}
