'use client';
import { useFM } from '@/lib/store';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function HeroChart(){
  const m = useFM(s=>s.markets[0]);
  const data = m.history.map((d,i)=>({ name:`T-${m.history.length-i}`, price:d.price }));
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="currentColor" stopOpacity={0.35}/>
              <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide/>
          <YAxis domain={[0,1]} hide/>
          <Tooltip contentStyle={{ background:'#0a0a0a', border:'1px solid #222', color:'#fff' }} formatter={(v)=>`${Math.round(Number(v)*100)}%`} />
          <Area type="monotone" dataKey="price" stroke="currentColor" fill="url(#g)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
