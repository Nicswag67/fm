'use client';
import { useFM } from '@/lib/store';
import MarketCard from '@/components/MarketCard';
import { useState, useMemo } from 'react';

export default function Markets(){
  const markets = useFM(s=>s.markets);
  const [league,setLeague] = useState('ALL');
  const filtered = useMemo(()=> markets.filter(m => league==='ALL' || m.league===league), [league,markets]);
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Markets</h1>
        <select className="glass rounded-xl px-3 py-2" value={league} onChange={e=>setLeague(e.target.value)}>
          {['ALL','NFL','NBA','MLB','Premier League'].map(x=> <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(m => <MarketCard key={m.id} m={m}/>) }
      </div>
    </div>
  );
}
