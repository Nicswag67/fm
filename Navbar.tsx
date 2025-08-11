'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wallet, Coins, Menu } from 'lucide-react';
import { useState } from 'react';
import { useFM } from '@/lib/store';

export default function Navbar(){
  const p = usePathname();
  const [open,setOpen] = useState(false);
  const cash = useFM(s=>s.user.cash);
  const nav = [
    {href:'/', label:'Home'},
    {href:'/markets', label:'Player Markets'},
    {href:'/portfolio', label:'Portfolio'},
    {href:'/about', label:'About'},
    {href:'/legal', label:'Compliance'},
    {href:'/contact', label:'Contact'}
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      <div className="section py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Coins className="h-6 w-6"/>
          <span className="font-semibold tracking-tight">Fan Market</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {nav.map(n=> (
            <Link key={n.href} href={n.href} className={p===n.href? 'text-white':'hover:text-white'}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full glass text-sm flex items-center gap-2"><Wallet className="h-4 w-4"/> {(cash).toLocaleString(undefined,{style:'currency',currency:'USD'})}</div>
          <button className="md:hidden" onClick={()=>setOpen(v=>!v)}><Menu className="h-6 w-6"/></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden section pb-3 grid gap-2 text-sm">
          {nav.map(n=> <Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}
        </div>
      )}
    </header>
  );
}
