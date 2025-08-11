import Link from 'next/link';
export default function Footer(){
  return (
    <footer className="border-t border-border mt-16">
      <div className="section py-10 grid md:grid-cols-3 gap-6 text-sm text-white/70">
        <div>
          <div className="font-semibold">Fan Market</div>
          <p className="mt-2">Demo interface for a regulated, stat‑based sports prediction market.</p>
        </div>
        <div className="grid gap-2">
          <Link href="/legal">Terms & Disclosures</Link>
          <Link href="/legal">Risk Statement</Link>
          <Link href="/legal">Privacy</Link>
        </div>
        <div className="grid gap-2">
          <span>© {new Date().getFullYear()} Fan Market</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
