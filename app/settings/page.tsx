'use client';
import { useFM } from '@/lib/store';
import { useState } from 'react';

export default function Settings(){
  const { user, deposit, reset } = useFM();
  const [name,setName] = useState(user.name);
  const [amt,setAmt] = useState(1000);
  return (
    <div className="grid gap-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="glass rounded-2xl p-4 grid gap-3">
        <div className="font-medium">Profile</div>
        <label className="text-xs text-white/60">Display name</label>
        <input className="glass rounded-xl px-3 py-2" value={name} onChange={e=>setName(e.target.value)} />
        <button className="rounded-2xl px-4 py-2 bg-white/10 w-fit" onClick={()=>{localStorage.setItem('fm_user', JSON.stringify({ ...user, name })); location.reload();}}>Save</button>
      </div>
      <div className="glass rounded-2xl p-4 grid gap-3">
        <div className="font-medium">Funding (Demo)</div>
        <input className="glass rounded-xl px-3 py-2" type="number" value={amt} onChange={e=>setAmt(Number(e.target.value))} />
        <button className="rounded-2xl px-4 py-2 bg-[color:var(--accent,#00e28f)] text-black w-fit" onClick={()=>deposit(Math.max(0,amt))}>Deposit</button>
        <p className="text-xs text-white/50">Prod: wire ACH provider (Plaid/Teller/Unit) and KYC.</p>
      </div>
      <div className="glass rounded-2xl p-4 grid gap-3">
        <div className="font-medium">Developer</div>
        <button className="rounded-2xl px-4 py-2 bg-white/10 w-fit" onClick={reset}>Reset demo state</button>
      </div>
    </div>
  );
}
