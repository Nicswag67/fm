'use client';
import { useState } from 'react';
import { useFM } from '@/lib/store';
import { Market } from '@/lib/types';

export default function TradeTicket({ market }: { market: Market }){
  const placeOrder = useFM(s=>s.placeOrder);
  const [side, setSide] = useState<'BUY'|'SELL'>('BUY');
  const [qty, setQty] = useState(10);
  const [limit, setLimit] = useState(market.lastPrice);
  return (
    <div className="glass rounded-2xl p-4 sticky top-24">
      <div className="font-medium mb-3">Order Ticket</div>
      <div className="grid grid-cols-2 text-sm rounded-xl overflow-hidden">
        <button className={`py-2 ${side==='BUY'?'bg-white/10':''}`} onClick={()=>setSide('BUY')}>Buy</button>
        <button className={`py-2 ${side==='SELL'?'bg-white/10':''}`} onClick={()=>setSide('SELL')}>Sell</button>
      </div>
      <label className="block text-xs text-white/60 mt-3">Quantity</label>
      <input className="w-full glass rounded-xl px-3 py-2 mt-1" type="number" value={qty} onChange={e=>setQty(Math.max(1,Number(e.target.value)))} />
      <label className="block text-xs text-white/60 mt-3">Limit (0–1)</label>
      <input className="w-full glass rounded-xl px-3 py-2 mt-1" type="number" step="0.01" min={0} max={1} value={limit} onChange={e=>setLimit(Math.min(1,Math.max(0,Number(e.target.value))))} />
      <div className="text-xs text-white/60 mt-2">Est. {side==='BUY'? 'cost':'credit'}: ${(qty*limit).toFixed(2)}</div>
      <button className="mt-3 w-full rounded-2xl py-2 bg-[color:var(--accent,#00e28f)] text-black font-medium" onClick={()=> placeOrder({ marketId: market.id, side, qty, price: limit })}>Place {side}</button>
      <details className="mt-3 text-xs text-white/60"><summary className="cursor-pointer">Fund account</summary><div className="mt-2">Use Settings to simulate a deposit; wire a real ACH provider in prod.</div></details>
      <p className="text-[11px] text-white/50 mt-2">Demo fills immediately at your limit. Replace with matching engine / order router in prod.</p>
    </div>
  );
}
