import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Links() {
  return (
    <nav className={styles.navLinks}>
      <Link href="/">Home</Link>
      <Link href="/mission">The Mission</Link>
      <Link href="/medal-of-honor">Medal of Honor</Link>
      <Link href="about-phil">About Phil</Link>
      <Link href="quotes">Quotes</Link>
      <Link href="documents">Documents</Link>
      <Link href="acknowledgments">Acknowledgments</Link>
      <Link href="contact">Contact</Link>
    </nav>
  )
}
