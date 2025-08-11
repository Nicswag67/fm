'use client';
import { useState } from 'react';

export default function Contact(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState('');
  const [sent,setSent] = useState(false);
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-white/70 mt-2">Questions, partnerships, media? Send a message.</p>
        <div className="glass rounded-2xl p-4 mt-4 grid gap-3">
          {sent ? (
            <div className="text-green-300">Thanks {name||'there'}! We'll get back to you shortly.</div>
          ) : (
            <>
              <input placeholder="Name" className="glass rounded-xl px-3 py-2" value={name} onChange={e=>setName(e.target.value)} />
              <input placeholder="Email" className="glass rounded-xl px-3 py-2" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
              <textarea placeholder="Message" className="glass rounded-xl px-3 py-2" rows={5} value={msg} onChange={e=>setMsg(e.target.value)} />
              <div className="flex gap-3">
                <button className="rounded-2xl px-5 py-2 bg-[color:var(--accent,#00e28f)] text-black font-medium" onClick={()=>setSent(true)}>Send</button>
                <button className="rounded-2xl px-5 py-2 glass" onClick={()=>{setName('');setEmail('');setMsg('');}}>Clear</button>
              </div>
              <p className="text-xs text-white/50">Production: submit to ticketing/CRM.</p>
            </>
          )}
        </div>
      </div>
      <div className="glass rounded-2xl p-4">
        <div className="font-medium mb-2">Why reach out?</div>
        <ul className="list-disc pl-6 text-white/70">
          <li>B2B data & liquidity partnerships</li>
          <li>Regulatory & compliance collaboration</li>
          <li>Investor relations and product demos</li>
        </ul>
      </div>
    </div>
  );
}
