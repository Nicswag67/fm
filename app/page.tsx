import HeroChart from '@/components/HeroChart';
import Link from 'next/link';

export default function Home(){
  return (
    <div className="grid gap-12">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Speculate <span className="text-[color:var(--accent,#00e28f)]">legally</span> on sports stats.</h1>
          <p className="mt-5 text-white/70 max-w-prose">Fan Market turns game questions into regulated, priced contracts—built with auditability and investor‑style tools like limit orders and portfolio analytics.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/markets" className="rounded-2xl px-5 py-2 bg-[color:var(--accent,#00e28f)] text-black font-medium">Browse Markets</Link>
            <Link href="/about" className="rounded-2xl px-5 py-2 glass">How it works</Link>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="glass rounded-xl p-3">SOC 2‑ready architecture</div>
            <div className="glass rounded-xl p-3">On‑chain audit log (roadmap)</div>
            <div className="glass rounded-xl p-3">24/7 support (BPO partner)</div>
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <div className="font-medium mb-2">Live Contract Preview</div>
          <HeroChart/>
        </div>
      </section>
    </div>
  );
}
