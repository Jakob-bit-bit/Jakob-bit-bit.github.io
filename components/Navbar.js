import Link from 'next/link';

// The navigation bar lets the user move between the main pages of the app.
export default function Navbar() {
  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Pokemon Stat Viewer</div>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <Link href="/" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>Home</Link>
          </li>
          <li>
            <Link href="/search" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>Search</Link>
          </li>
          <li>
            <Link href="/deck" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>My Deck</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}