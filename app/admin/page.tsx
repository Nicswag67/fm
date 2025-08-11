'use client';
import { useFM } from '@/lib/store';
import { makeSeries } from '@/lib/mock';
import { useState } from 'react';

export default function Admin(){
  const { markets } = useFM();
  const [league,setLeague] = useState('NFL');
  const [label,setLabel] = useState('');
  const [last,setLast] = useState(0.5);
  const [closesAt,setClosesAt] = useState('2025-12-31T23:59');
  const add = () => {
    const m = { id:`${league.toLowerCase()}-${crypto.randomUUID()}`, league, label, description: label, closesAt:new Date(closesAt).toISOString(), lastPrice:last, history: makeSeries(60, Math.max(0,last-0.2), Math.min(1,last+0.2)), status:'open' };
    const all = [...markets, m];
    localStorage.setItem('fm_markets', JSON.stringify(all));
    location.reload();
  };
  return (
    <div className="grid gap-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <div className="glass rounded-2xl p-4 grid gap-3">
        <div className="font-medium">Create Market (Demo)</div>
        <select className="glass rounded-xl px-3 py-2 w-44" value={league} onChange={e=>setLeague(e.target.value)}>
          {['NFL','NBA','MLB','Premier League'].map(x=> <option key={x}>{x}</option>)}
        </select>
        <input className="glass rounded-xl px-3 py-2" placeholder="Label" value={label} onChange={e=>setLabel(e.target.value)} />
        <input className="glass rounded-xl px-3 py-2" type="number" step="0.01" min={0} max={1} value={last} onChange={e=>setLast(Number(e.target.value))} />
        <input className="glass rounded-xl px-3 py-2" type="datetime-local" value={closesAt} onChange={e=>setClosesAt(e.target.value)} />
        <button className="rounded-2xl px-4 py-2 bg-[color:var(--accent,#00e28f)] text-black w-fit" onClick={add}>Add Market</button>
        <p className="text-xs text-white/50">Writes to localStorage for demo; replace with secure API + review workflow.</p>
      </div>
      <div className="glass rounded-2xl p-4">
        <div className="font-medium mb-3">Existing Markets</div>
        <div className="grid gap-2 text-sm">
          {markets.map(m=> (
            <div key={m.id} className="flex items-center justify-between py-2 border-b border-white/5">
              <div className="truncate"><span className="text-white/60 mr-2">{m.league}</span>{m.label}</div>
              <div className="text-white/70">{Math.round(m.lastPrice*100)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
