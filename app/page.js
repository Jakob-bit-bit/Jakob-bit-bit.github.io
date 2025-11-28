import Link from 'next/link';

// This is the home page.
// It introduces our Pokemon project and links to the search page.
export default function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Welcome to Pokemon Stat Viewer</h1>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>Search, explore, and build your perfect Pokemon deck!</p>
        <Link href="/search">
          <button style={{ padding: '12px 30px', fontSize: '16px' }}>
            Start Searching
          </button>
        </Link>
      </section>

      
    </div>
  );
}