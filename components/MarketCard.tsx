import Link from 'next/link';
import { Market } from '@/lib/types';
import { impliedProbToOdds } from '@/lib/utils';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

export default function MarketCard({ m }: { m: Market }){
  return (
    <div className="glass rounded-2xl p-4 hover:border-white/20 transition">
      <div className="flex items-center gap-2 text-xs text-white/60 mb-1">{m.league}</div>
      <div className="font-medium mb-3">{m.label}</div>
      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={m.history} margin={{ top: 5, right: 0, bottom: 0, left: 0 }}>
            <XAxis dataKey="t" hide/><YAxis domain={[0,1]} hide/>
            <Line dataKey="price" type="monotone" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-sm text-white/70 flex items-center justify-between">
        <span>Implied {Math.round(m.lastPrice*100)}% ({impliedProbToOdds(m.lastPrice)})</span>
        <Link href={`/markets/${m.id}`} className="text-[color:var(--accent,#00e28f)] hover:underline">Trade</Link>
      </div>
    </div>
  );
}
