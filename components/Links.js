import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Links() {
  return (
    <nav className={styles.navLinks}>
      <Link href="/">Home</Link>
      <Link href="/mission">The Mission</Link>
      <Link href="/medal-of-honor">Medal of Honor Recommendation</Link>
      <Link href="">About Phil</Link>
      <Link href="">Quotes</Link>
      <Link href="">Documents</Link>
      <Link href="contact">Contact</Link>
    </nav>
  )
}
