// components/PlayerMarketCard.tsx
"use client";

import { PlayerStatMarket } from "../types";
import Link from "next/link";
import Image from "next/image";

export default function PlayerMarketCard({ m }: { m: PlayerStatMarket }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        {m.headshotUrl ? (
          <Image
            src={m.headshotUrl}
            alt={m.playerName}
            width={48}
            height={48}
            className="rounded-xl object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-white/10" />
        )}
        <div className="flex-1">
          <div className="text-white font-semibold">{m.playerName}</div>
          <div className="text-white/60 text-sm">
            {m.team} vs {m.opponent} • {new Date(m.startTime).toLocaleString()}
          </div>
        </div>
        <div className="text-right">
          <div className="text-white text-sm">{m.stat}</div>
          <div className="text-white/80 text-xl font-bold">{m.line}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-white/70 text-sm">
          Price: <span className="text-white font-medium">{(m.price * 100).toFixed(0)}¢</span>
          {m.liquidity ? (
            <span className="ml-3 text-white/50">Liquidity ${m.liquidity.toLocaleString()}</span>
          ) : null}
        </div>
        <Link
          href={`/trade/${m.id}`}
          className="rounded-xl px-4 py-2 bg-white text-black text-sm font-medium hover:bg-white/90 transition"
        >
          Trade
        </Link>
      </div>
    </div>
  );
}
