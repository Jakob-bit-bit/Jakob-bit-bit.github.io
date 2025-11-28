import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Pokemon Stat Viewer',
  description: 'View and manage your Pokemon collection',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}