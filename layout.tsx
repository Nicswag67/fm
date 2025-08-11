import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// layout.tsx
export const metadata = {
  title: "Fan Market – Invest in Your Favorite Players’ Stats",
  description:
    "A market for fans. Invest in player stat outcomes with simple, intuitive markets.",
  // …keep existing icons/metadata
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
