'use client';
import { useFM } from '@/lib/store';
import { useParams } from 'next/navigation';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { impliedProbToOdds } from '@/lib/utils';
import TradeTicket from '@/components/TradeTicket';

export default function MarketDetail(){
  const { id } = useParams<{id:string}>();
  const m = useFM(s=> s.markets.find(x=>x.id===id));
  if(!m) return <div>Market not found</div>;
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 grid gap-6">
        <h1 className="text-2xl font-semibold">{m.label}</h1>
        <div className="glass rounded-2xl p-4">
          <div className="font-medium mb-2">Price</div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={m.history}>
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="currentColor" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="t" hide/>
                <YAxis domain={[0,1]} hide/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip contentStyle={{ background:'#0a0a0a', border:'1px solid #222', color:'#fff' }} formatter={(v)=>`${Math.round(Number(v)*100)}%`} />
                <Area type="monotone" dataKey="price" stroke="currentColor" fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 text-sm text-white/70 flex items-center gap-4">
            <span>Last: {Math.round(m.lastPrice*100)}%</span>
            <span>Odds {impliedProbToOdds(m.lastPrice)}</span>
            <span className="ml-auto">Closes: {new Date(m.closesAt).toLocaleString()}</span>
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <div className="font-medium mb-1">About</div>
          <p className="text-white/70">{m.description}</p>
        </div>
      </div>
      <div className="lg:col-span-1">
        <TradeTicket market={m}/>
      </div>
    </div>
  );
}
