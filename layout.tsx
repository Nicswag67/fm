import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fan Market',
  description: 'Sports stat prediction market – Apple/Webull inspired',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="section py-10">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
