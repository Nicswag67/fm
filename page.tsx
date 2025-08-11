// page.tsx
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-120px)] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0.6))]">
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          A Market for Fans
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-3xl">
          Investing in your favorite player has never been this easy.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/markets"
            className="rounded-2xl px-6 py-3 bg-white text-black font-medium hover:bg-white/90 transition"
          >
            View Player Markets
          </Link>
          <Link
            href="/learn"
            className="rounded-2xl px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition"
          >
            How it works
          </Link>
        </div>
      </section>

      {/* Keep any charts/visual below the fold */}
      <Suspense fallback={null}>
        {/* Example: <HeroChart /> */}
      </Suspense>
    </main>
  );
}
